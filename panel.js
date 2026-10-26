(function () {
  'use strict';

  var Store = window.OrderStore;
  var DATA = window.MENU || { info: {}, categories: [] };

  var LABEL = { paid: 'Ödendi · yeni', preparing: 'Hazırlanıyor', ready: 'Hazır', done: 'Teslim edildi' };
  /* Bir sonraki durum ve butonun yazısı */
  var NEXT = {
    paid: { to: 'preparing', text: 'Hazırlamaya başla' },
    preparing: { to: 'ready', text: 'Hazır' },
    ready: { to: 'done', text: 'Teslim edildi' }
  };
  var METHOD = { card: 'Kart', wallet: 'Apple/Google Pay' };

  var el = {
    biz: document.getElementById('biz'),
    list: document.getElementById('list'),
    empty: document.getElementById('empty'),
    tabActive: document.getElementById('tab-active'),
    tabDone: document.getElementById('tab-done'),
    demo: document.getElementById('demo-order'),
    clear: document.getElementById('clear')
  };

  var tab = 'active';
  var known = {};      /* görülmüş sipariş numaraları: yenileri vurgulamak için */
  var firstRender = true;

  function h(tag, props, kids) {
    var e = document.createElement(tag);
    if (props) {
      Object.keys(props).forEach(function (k) {
        if (k === 'text') e.textContent = props[k];
        else if (k === 'class') e.className = props[k];
        else e.setAttribute(k, props[k]);
      });
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }

  function clock(ts) {
    var d = new Date(ts);
    return ('0' + d.getHours()).slice(-2) + ':' + ('0' + d.getMinutes()).slice(-2);
  }

  function card(o) {
    var next = NEXT[o.status];
    var isNew = !firstRender && !known[o.id];

    var items = h('ul', { class: 'ph-items' }, o.items.map(function (it) {
      return h('li', null, [
        h('span', null, [h('span', { class: 'q', text: it.qty + '×' }), document.createTextNode(it.name)]),
        h('span', { text: (it.qty * it.price) + ' ₺' })
      ]);
    }));

    var top = h('div', { class: 'ph-top' }, [
      h('span', { class: 'ph-id', text: o.id }),
      h('span', { class: 'ph-meta', text: clock(o.ts) + ' · ' + (METHOD[o.method] || o.method) + (o.test ? ' · TEST' : '') })
    ]);

    var kids = [top];
    if (o.table) kids.push(h('span', { class: 'ph-table', text: 'Masa ' + o.table }));
    kids.push(items);
    if (o.note) kids.push(h('p', { class: 'ph-note', text: 'Not: ' + o.note }));

    var bottom = h('div', { class: 'ph-bottom' }, [
      h('div', null, [
        h('div', { class: 'ph-total', text: o.total + ' ₺' }),
        h('div', { class: 'ph-state', text: LABEL[o.status] || o.status })
      ])
    ]);
    if (next) {
      var btn = h('button', { type: 'button', class: 'ph-btn', 'data-id': o.id, 'data-to': next.to, text: next.text });
      bottom.appendChild(btn);
    }
    kids.push(bottom);

    return h('article', { class: 'ph-card' + (isNew ? ' fresh' : ''), 'data-status': o.status }, kids);
  }

  function render() {
    var all = Store.list();
    var active = all.filter(function (o) { return o.status !== 'done'; });
    var done = all.filter(function (o) { return o.status === 'done'; });

    el.tabActive.textContent = 'Aktif (' + active.length + ')';
    el.tabDone.textContent = 'Tamamlanan (' + done.length + ')';
    el.tabActive.setAttribute('aria-selected', String(tab === 'active'));
    el.tabDone.setAttribute('aria-selected', String(tab === 'done'));

    var shown = tab === 'active' ? active.slice().reverse() : done;   /* aktifte en eski üstte */
    el.list.textContent = '';
    shown.forEach(function (o) { el.list.appendChild(card(o)); });
    el.empty.hidden = shown.length > 0;
    el.empty.textContent = tab === 'active'
      ? 'Şu an bekleyen sipariş yok. Müşteri ödeme yapınca burada görünür.'
      : 'Henüz tamamlanan sipariş yok.';

    all.forEach(function (o) { known[o.id] = true; });
    firstRender = false;
  }

  el.list.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-id]');
    if (!b) return;
    Store.setStatus(b.getAttribute('data-id'), b.getAttribute('data-to'));
    render();
  });

  el.tabActive.addEventListener('click', function () { tab = 'active'; render(); });
  el.tabDone.addEventListener('click', function () { tab = 'done'; render(); });

  el.demo.addEventListener('click', function () {
    var pool = [];
    DATA.categories.forEach(function (c) { c.items.forEach(function (it) { pool.push(it); }); });
    if (!pool.length) return;
    var items = [];
    var total = 0;
    for (var i = 0; i < 2 + Math.floor(Math.random() * 2); i++) {
      var it = pool[Math.floor(Math.random() * pool.length)];
      var qty = 1 + Math.floor(Math.random() * 2);
      items.push({ name: it.name.tr, qty: qty, price: it.price });
      total += qty * it.price;
    }
    Store.add({ table: String(1 + Math.floor(Math.random() * 12)), items: items, total: total, method: 'card', test: true });
    tab = 'active';
    render();
  });

  el.clear.addEventListener('click', function () {
    if (window.confirm('Tüm siparişler silinsin mi?')) { Store.clear(); render(); }
  });

  Store.onChange(render);

  el.biz.textContent = DATA.info.name || '';
  document.title = 'Gelen siparişler · ' + (DATA.info.name || '');
  render();
})();
