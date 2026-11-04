/*
  SİPARİŞ DEPOSU (demo)

  Siparişler şimdilik tarayıcının localStorage alanında tutulur. Bu yüzden müşteri sayfası ile
  mutfak paneli AYNI tarayıcıda (örn. iki sekme) birbirini canlı görür. Farklı telefonlar arasında
  çalışması için bu dosyadaki fonksiyonların içi bir sunucuya (örn. Cloudflare Worker + D1) bağlanır;
  app.js ve panel.js tarafında değişiklik gerekmez, çünkü yalnızca bu arayüzü kullanırlar.

  Durumlar: paid (ödendi) -> preparing (hazırlanıyor) -> ready (hazır) -> done (teslim edildi)
*/
window.OrderStore = (function () {
  'use strict';

  var KEY = 'menu-orders';
  var CALLS_KEY = 'menu-calls';
  var STATUSES = ['paid', 'preparing', 'ready', 'done'];

  function read() {
    try {
      var a = JSON.parse(localStorage.getItem(KEY) || '[]');
      return Array.isArray(a) ? a : [];
    } catch (e) { return []; }
  }

  function write(list) {
    try { localStorage.setItem(KEY, JSON.stringify(list.slice(0, 200))); } catch (e) { /* ignore */ }
  }

  function readCalls() {
    try {
      var a = JSON.parse(localStorage.getItem(CALLS_KEY) || '[]');
      return Array.isArray(a) ? a : [];
    } catch (e) { return []; }
  }

  function writeCalls(list) {
    try { localStorage.setItem(CALLS_KEY, JSON.stringify(list.slice(0, 100))); } catch (e) { /* ignore */ }
  }

  function nextId(list) {
    var max = 100;
    list.forEach(function (o) {
      var n = parseInt(String(o.id).replace(/\D/g, ''), 10);
      if (n > max) max = n;
    });
    return '#' + (max + 1);
  }

  return {
    STATUSES: STATUSES,

    list: read,

    get: function (id) {
      var all = read();
      for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
      return null;
    },

    /* o: { table, note, items: [{ name, qty, price }], total, method, test } */
    add: function (o) {
      var list = read();
      var order = {
        id: nextId(list),
        ts: Date.now(),
        status: 'paid',
        table: o.table || '',
        note: o.note || '',
        items: o.items || [],
        total: o.total || 0,
        method: o.method || '',
        test: o.test !== false
      };
      list.unshift(order);
      write(list);
      return order;
    },

    setStatus: function (id, status) {
      if (STATUSES.indexOf(status) < 0) return;
      var list = read();
      list.forEach(function (o) { if (o.id === id) o.status = status; });
      write(list);
    },

    /* Garson çağrıları: { id, ts, table, done } */
    calls: readCalls,

    openCall: function (table) {
      var all = readCalls();
      for (var i = 0; i < all.length; i++) if (!all[i].done && all[i].table === table) return all[i];
      return null;
    },

    /* Aynı masa için açık çağrı varsa yenisini eklemez */
    addCall: function (table) {
      var existing = this.openCall(table);
      if (existing) return existing;
      var list = readCalls();
      var call = { id: 'c' + Date.now(), ts: Date.now(), table: String(table), done: false };
      list.unshift(call);
      writeCalls(list);
      return call;
    },

    resolveCall: function (id) {
      var list = readCalls();
      list.forEach(function (c) { if (c.id === id) c.done = true; });
      writeCalls(list);
    },

    clear: function () { write([]); writeCalls([]); },

    /* Başka sekmede/pencerede sipariş değişince çağrılır */
    onChange: function (fn) {
      window.addEventListener('storage', function (e) { if (e.key === KEY || e.key === CALLS_KEY) fn(); });
    }
  };
})();
