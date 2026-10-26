(function () {
  'use strict';

  var DATA = window.MENU;
  var LANGS = ['tr', 'en', 'de', 'ru'];
  var LABELS = { tr: 'TR', en: 'EN', de: 'DE', ru: 'RU' };
  var NAMES = { tr: 'Türkçe', en: 'English', de: 'Deutsch', ru: 'Русский' };

  var UI = {
    tr: {
      search: 'Menüde ara', empty: 'Eşleşen ürün yok. Başka bir kelime deneyin.',
      p: 'Çok sevilen', v: 'Vejetaryen', s: 'Acılı', close: 'Kapat',
      wa: 'WhatsApp ile yazın', ig: 'Instagram', review: 'Google\'da yorum yazın',
      pass: 'Şifre', copy: 'Kopyala', copied: 'Kopyalandı',
      allergy: 'Alerjiniz varsa lütfen servis personelimize bildirin.',
      payNow: 'Şimdi öde (test)', payTitle: 'Ödeme', payTest: 'TEST MODU — gerçek ödeme alınmaz',
      payMethods: 'Ödeme yöntemi', payCard: 'Kredi / banka kartı', payWallet: 'Apple Pay / Google Pay',
      payGo: 'Öde', paying: 'Ödeme alınıyor…', paidT: 'Ödeme alındı', orderNo: 'Sipariş no',
      toKitchen: 'Siparişiniz mutfağa iletildi. Masanızdan kalkmanıza gerek yok.',
      payNote: 'Bu bir demodur: kart bilgisi istenmez ve hiçbir ücret çekilmez.', ok: 'Tamam', tableLbl: 'Masa',
      st_paid: 'Sipariş alındı', st_preparing: 'Hazırlanıyor', st_ready: 'Hazır, afiyet olsun', st_done: 'Teslim edildi',
      theme: 'Temayı değiştir', alFilter: 'Alerjen filtresi', alFilterOn: 'Alerjen filtresi ({n})',
      alTitle: 'Alerjenler', alNone: 'Bilinen alerjen yok',
      add: 'Sepete ekle', addMore: 'Sepete bir tane daha ekle', cart: 'Sepetim', viewCart: 'Sepeti gör',
      items: 'ürün', total: 'Toplam', table: 'Masa numarası (isteğe bağlı)', note: 'Sipariş notu (isteğe bağlı)',
      send: 'WhatsApp ile siparişi gönder', clear: 'Sepeti temizle', cartEmpty: 'Sepetiniz boş.',
      cartHint: 'Sipariş, hazır mesaj olarak WhatsApp\'ta açılır. Göndermeden önce kontrol edebilirsiniz.',
      dec: 'Azalt', inc: 'Artır',
      demo: 'DEMO — örnek menü', cats: 'Menü kategorileri'
    },
    en: {
      search: 'Search the menu', empty: 'No matching items. Try another word.',
      p: 'Popular', v: 'Vegetarian', s: 'Spicy', close: 'Close',
      wa: 'Message us on WhatsApp', ig: 'Instagram', review: 'Leave a Google review',
      pass: 'Password', copy: 'Copy', copied: 'Copied',
      allergy: 'If you have an allergy, please tell our staff before ordering.',
      payNow: 'Pay now (test)', payTitle: 'Payment', payTest: 'TEST MODE — no real payment is taken',
      payMethods: 'Payment method', payCard: 'Credit / debit card', payWallet: 'Apple Pay / Google Pay',
      payGo: 'Pay', paying: 'Processing payment…', paidT: 'Payment received', orderNo: 'Order no.',
      toKitchen: 'Your order was sent to the kitchen. No need to leave your table.',
      payNote: 'This is a demo: no card details are asked for and nothing is charged.', ok: 'Done', tableLbl: 'Table',
      st_paid: 'Order received', st_preparing: 'Preparing', st_ready: 'Ready, enjoy your meal', st_done: 'Delivered',
      theme: 'Switch theme', alFilter: 'Allergen filter', alFilterOn: 'Allergen filter ({n})',
      alTitle: 'Allergens', alNone: 'No known allergens',
      add: 'Add to order', addMore: 'Add one more', cart: 'Your order', viewCart: 'View order',
      items: 'items', total: 'Total', table: 'Table number (optional)', note: 'Order note (optional)',
      send: 'Send order via WhatsApp', clear: 'Clear order', cartEmpty: 'Your order is empty.',
      cartHint: 'The order opens in WhatsApp as a ready message. You can review it before sending.',
      dec: 'Decrease', inc: 'Increase',
      demo: 'DEMO — sample menu', cats: 'Menu categories'
    },
    de: {
      search: 'Menü durchsuchen', empty: 'Keine passenden Gerichte. Versuchen Sie ein anderes Wort.',
      p: 'Beliebt', v: 'Vegetarisch', s: 'Scharf', close: 'Schließen',
      wa: 'Per WhatsApp schreiben', ig: 'Instagram', review: 'Google-Bewertung abgeben',
      pass: 'Passwort', copy: 'Kopieren', copied: 'Kopiert',
      allergy: 'Bei Allergien informieren Sie bitte vor der Bestellung unser Personal.',
      payNow: 'Jetzt zahlen (Test)', payTitle: 'Zahlung', payTest: 'TESTMODUS — es wird nichts abgebucht',
      payMethods: 'Zahlungsart', payCard: 'Kredit- / Debitkarte', payWallet: 'Apple Pay / Google Pay',
      payGo: 'Bezahlen', paying: 'Zahlung wird verarbeitet…', paidT: 'Zahlung erhalten', orderNo: 'Bestellnr.',
      toKitchen: 'Ihre Bestellung wurde an die Küche übermittelt. Sie müssen nicht aufstehen.',
      payNote: 'Dies ist eine Demo: Es werden keine Kartendaten abgefragt und nichts abgebucht.', ok: 'Fertig', tableLbl: 'Tisch',
      st_paid: 'Bestellung erhalten', st_preparing: 'Wird zubereitet', st_ready: 'Fertig, guten Appetit', st_done: 'Serviert',
      theme: 'Design wechseln', alFilter: 'Allergenfilter', alFilterOn: 'Allergenfilter ({n})',
      alTitle: 'Allergene', alNone: 'Keine bekannten Allergene',
      add: 'Zur Bestellung', addMore: 'Noch eins hinzufügen', cart: 'Ihre Bestellung', viewCart: 'Bestellung ansehen',
      items: 'Artikel', total: 'Summe', table: 'Tischnummer (optional)', note: 'Anmerkung (optional)',
      send: 'Bestellung per WhatsApp senden', clear: 'Bestellung leeren', cartEmpty: 'Ihre Bestellung ist leer.',
      cartHint: 'Die Bestellung öffnet sich als fertige Nachricht in WhatsApp. Sie können sie vor dem Senden prüfen.',
      dec: 'Weniger', inc: 'Mehr',
      demo: 'DEMO — Beispielmenü', cats: 'Menükategorien'
    },
    ru: {
      search: 'Поиск по меню', empty: 'Ничего не найдено. Попробуйте другое слово.',
      p: 'Популярное', v: 'Вегетарианское', s: 'Острое', close: 'Закрыть',
      wa: 'Написать в WhatsApp', ig: 'Instagram', review: 'Оставить отзыв в Google',
      pass: 'Пароль', copy: 'Копировать', copied: 'Скопировано',
      allergy: 'При аллергии, пожалуйста, сообщите об этом официанту перед заказом.',
      payNow: 'Оплатить сейчас (тест)', payTitle: 'Оплата', payTest: 'ТЕСТОВЫЙ РЕЖИМ — деньги не списываются',
      payMethods: 'Способ оплаты', payCard: 'Банковская карта', payWallet: 'Apple Pay / Google Pay',
      payGo: 'Оплатить', paying: 'Обработка платежа…', paidT: 'Оплата получена', orderNo: 'Заказ №',
      toKitchen: 'Заказ передан на кухню. Вставать из-за стола не нужно.',
      payNote: 'Это демо: данные карты не запрашиваются, деньги не списываются.', ok: 'Готово', tableLbl: 'Стол',
      st_paid: 'Заказ принят', st_preparing: 'Готовится', st_ready: 'Готово, приятного аппетита', st_done: 'Выдано',
      theme: 'Сменить тему', alFilter: 'Фильтр аллергенов', alFilterOn: 'Фильтр аллергенов ({n})',
      alTitle: 'Аллергены', alNone: 'Известных аллергенов нет',
      add: 'Добавить в заказ', addMore: 'Добавить ещё одно', cart: 'Ваш заказ', viewCart: 'Открыть заказ',
      items: 'поз.', total: 'Итого', table: 'Номер стола (по желанию)', note: 'Комментарий (по желанию)',
      send: 'Отправить заказ в WhatsApp', clear: 'Очистить заказ', cartEmpty: 'Ваш заказ пуст.',
      cartHint: 'Заказ откроется в WhatsApp как готовое сообщение. Перед отправкой его можно проверить.',
      dec: 'Меньше', inc: 'Больше',
      demo: 'ДЕМО — пример меню', cats: 'Категории меню'
    }
  };

  var AL = {
    gluten:    { icon: '\uD83C\uDF3E', tr: 'Gluten',   en: 'Gluten',    de: 'Gluten',        ru: 'Глютен' },
    dairy:     { icon: '\uD83E\uDD5B', tr: 'Süt',      en: 'Dairy',     de: 'Milch',         ru: 'Молоко' },
    egg:       { icon: '\uD83E\uDD5A', tr: 'Yumurta',  en: 'Egg',       de: 'Ei',            ru: 'Яйца' },
    nuts:      { icon: '\uD83E\uDD5C', tr: 'Kuruyemiş',en: 'Nuts',      de: 'Nüsse',         ru: 'Орехи' },
    fish:      { icon: '\uD83D\uDC1F', tr: 'Balık',    en: 'Fish',      de: 'Fisch',         ru: 'Рыба' },
    shellfish: { icon: '\uD83E\uDD90', tr: 'Deniz ürünü', en: 'Shellfish', de: 'Meeresfrüchte', ru: 'Морепродукты' },
    sesame:    { icon: '\uD83E\uDD6F', tr: 'Susam',    en: 'Sesame',    de: 'Sesam',         ru: 'Кунжут' }
  };
  var AL_ORDER = ['gluten', 'dairy', 'egg', 'nuts', 'fish', 'shellfish', 'sesame'];

  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var el = {
    demo: document.getElementById('demo'),
    hero: document.getElementById('hero'),
    name: document.getElementById('name'),
    tagline: document.getElementById('tagline'),
    langs: document.getElementById('langs'),
    chips: document.getElementById('chips'),
    q: document.getElementById('q'),
    menu: document.getElementById('menu'),
    empty: document.getElementById('empty'),
    actions: document.getElementById('actions'),
    wifi: document.getElementById('wifi'),
    allergy: document.getElementById('allergy'),
    credit: document.getElementById('credit'),
    sheet: document.getElementById('sheet'),
    sheetX: document.getElementById('sheet-x'),
    sheetPh: document.getElementById('sheet-ph'),
    sheetName: document.getElementById('sheet-name'),
    sheetDesc: document.getElementById('sheet-desc'),
    sheetPrice: document.getElementById('sheet-price'),
    sheetTags: document.getElementById('sheet-tags'),
    sheetAl: document.getElementById('sheet-al'),
    sheetAlT: document.getElementById('sheet-al-t'),
    sheetAlList: document.getElementById('sheet-al-list'),
    sheetAdd: document.getElementById('sheet-add'),
    theme: document.getElementById('theme'),
    themeColor: document.getElementById('theme-color'),
    alfilter: document.getElementById('alfilter'),
    alfilterSum: document.getElementById('alfilter-sum'),
    alchips: document.getElementById('alchips'),
    cartbar: document.getElementById('cartbar'),
    cartbarN: document.getElementById('cartbar-n'),
    cartbarL: document.getElementById('cartbar-l'),
    cartbarP: document.getElementById('cartbar-p'),
    cart: document.getElementById('cart'),
    cartX: document.getElementById('cart-x'),
    cartTitle: document.getElementById('cart-title'),
    cartList: document.getElementById('cart-list'),
    cartEmpty: document.getElementById('cart-empty'),
    cartTotalL: document.getElementById('cart-total-l'),
    cartTotal: document.getElementById('cart-total'),
    cartTableL: document.getElementById('cart-table-l'),
    cartTable: document.getElementById('cart-table'),
    cartNoteL: document.getElementById('cart-note-l'),
    cartNote: document.getElementById('cart-note'),
    cartSend: document.getElementById('cart-send'),
    cartPay: document.getElementById('cart-pay'),
    pay: document.getElementById('pay'),
    payX: document.getElementById('pay-x'),
    payTest: document.getElementById('pay-test'),
    payForm: document.getElementById('pay-form'),
    payTitle: document.getElementById('pay-title'),
    paySum: document.getElementById('pay-sum'),
    payTotalL: document.getElementById('pay-total-l'),
    payTotal: document.getElementById('pay-total'),
    payMt: document.getElementById('pay-mt'),
    payMethods: document.getElementById('pay-methods'),
    payGo: document.getElementById('pay-go'),
    payNote: document.getElementById('pay-note'),
    payDone: document.getElementById('pay-done'),
    payDoneT: document.getElementById('pay-done-t'),
    payNo: document.getElementById('pay-no'),
    payDd: document.getElementById('pay-dd'),
    paySteps: document.getElementById('pay-steps'),
    payClose: document.getElementById('pay-close'),
    cartClear: document.getElementById('cart-clear'),
    cartHint: document.getElementById('cart-hint')
  };

  var lang = pickLang();
  var io = null;
  var openItem = null;          /* detay penceresinde açık ürün */
  var excluded = {};            /* alerjen filtresi: { gluten: true } */
  var cart = loadCart();        /* { "c-i": adet } */
  var payToken = 0;             /* ödeme işlemi iptal/yenileme koruması */
  var payOrderId = null;        /* ödeme sonrası takip edilen sipariş */

  function safeGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function safeSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }

  function pickLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS.indexOf(q) > -1) return q;
    var saved = safeGet('menu-lang');
    if (saved && LANGS.indexOf(saved) > -1) return saved;
    var nav = ((navigator.language || 'en') + '').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : 'en';
  }

  /* Sayfa kaydırma kilidini yalnızca hiçbir pencere açık değilse kaldır */
  function unlock() {
    if (!document.querySelector('dialog[open]')) document.documentElement.classList.remove('lock');
  }

  function ordering() { return DATA.info.ordering !== false && !!DATA.info.whatsapp; }
  function paying() { return ordering() && DATA.info.payment === 'test' && !!window.OrderStore; }

  function itemOf(key) {
    var p = key.split('-');
    var c = DATA.categories[+p[0]];
    return c && c.items[+p[1]] ? c.items[+p[1]] : null;
  }

  function loadCart() {
    var out = {};
    try {
      var raw = JSON.parse(safeGet('menu-cart') || '{}');
      Object.keys(raw).forEach(function (k) {
        var n = parseInt(raw[k], 10);
        if (/^\d+-\d+$/.test(k) && n > 0 && itemOf(k)) out[k] = Math.min(n, 99);
      });
    } catch (e) { /* bozuk kayıt: boş sepetle başla */ }
    return out;
  }

  function saveCart() { safeSet('menu-cart', JSON.stringify(cart)); }

  function cartCount() {
    return Object.keys(cart).reduce(function (a, k) { return a + cart[k]; }, 0);
  }

  function cartSum() {
    return Object.keys(cart).reduce(function (a, k) { return a + cart[k] * itemOf(k).price; }, 0);
  }

  function changeQty(key, d) {
    var n = (cart[key] || 0) + d;
    if (n <= 0) delete cart[key];
    else cart[key] = Math.min(n, 99);
    saveCart();
    refreshCart();
  }

  function applyTheme(mode) {
    if (mode === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    var light = mode === 'light';
    el.theme.textContent = light ? '\u263E' : '\u2600';
    el.theme.setAttribute('aria-pressed', String(light));
    el.themeColor.setAttribute('content', light ? '#FAF6EE' : '#0B1820');
  }

  function t(obj) { return (obj && (obj[lang] || obj.en || obj.tr)) || ''; }

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

  function fill(node, kids) {
    node.textContent = '';
    kids.forEach(function (k) { node.appendChild(k); });
  }

  function tagNodes(it) {
    var ui = UI[lang];
    return (it.tags || []).map(function (g) {
      return h('span', { class: 'tg ' + g, text: ui[g] });
    });
  }

  /* Fotoğraf: img verilmişse görsel, yoksa halka desenli boş alan */
  function paintPhoto(box, it, alt) {
    box.textContent = '';
    if (it.img) {
      var img = h('img', { src: it.img, alt: alt, loading: 'lazy' });
      img.addEventListener('error', function () {
        box.textContent = '';
        box.classList.add('empty');
      });
      box.classList.remove('empty');
      box.appendChild(img);
    } else {
      box.classList.add('empty');
    }
  }

  function renderLangs() {
    fill(el.langs, LANGS.map(function (l) {
      return h('button', {
        type: 'button', 'data-lang': l, text: LABELS[l],
        'aria-label': NAMES[l], 'aria-pressed': String(l === lang), lang: l
      });
    }));
  }

  function renderMenu() {
    var showEmpty = DATA.info.placeholders !== false;

    fill(el.chips, DATA.categories.map(function (c) {
      return h('button', { type: 'button', class: 'chip', 'data-id': c.id, 'aria-current': 'false', text: t(c.name) });
    }));

    fill(el.menu, DATA.categories.map(function (c, ci) {
      var kids = [h('h2', { text: t(c.name) })];
      c.items.forEach(function (it, ii) {
        var name = t(it.name);
        var desc = t(it.desc);
        var meta = h('span', { class: 'meta' }, [h('span', { class: 'pr', text: it.price + ' ₺' })]);
        var tg = tagNodes(it);
        if (tg.length) meta.appendChild(h('span', { class: 'tags' }, tg));

        var txt = h('span', { class: 'txt' }, [
          h('span', { class: 'nm', text: name }),
          desc ? h('span', { class: 'ds', text: desc }) : null,
          meta
        ]);

        var node = h('button', {
          type: 'button', class: 'item', 'data-c': String(ci), 'data-i': String(ii)
        }, [txt]);

        if (it.img || showEmpty) {
          var ph = h('span', { class: 'ph' });
          paintPhoto(ph, it, name);
          node.appendChild(ph);
        } else {
          node.classList.add('solo');
        }
        var row = h('div', {
          class: 'row', 'data-key': ci + '-' + ii,
          'data-s': (name + ' ' + desc).toLocaleLowerCase(lang),
          'data-al': (it.al || []).join(',')
        }, [node]);
        if (ordering()) {
          row.appendChild(h('button', {
            type: 'button', class: 'add', 'data-key': ci + '-' + ii,
            'aria-label': UI[lang].add + ': ' + name, text: '+'
          }));
        }
        kids.push(row);
      });
      return h('section', { class: 'cat', id: 'cat-' + c.id }, kids);
    }));
  }

  function openSheet(it) {
    var ui = UI[lang];
    var name = t(it.name);
    var desc = t(it.desc);
    paintPhoto(el.sheetPh, it, name);
    el.sheetName.textContent = name;
    el.sheetDesc.textContent = desc;
    el.sheetDesc.hidden = !desc;
    el.sheetPrice.textContent = it.price + ' ₺';
    fill(el.sheetTags, tagNodes(it));

    var alKeys = (it.al || []).filter(function (k) { return AL[k]; });
    el.sheetAl.hidden = !Array.isArray(it.al);   /* alan hiç girilmemişse güvence verme */
    el.sheetAlT.textContent = ui.alTitle;
    if (alKeys.length) {
      fill(el.sheetAlList, alKeys.map(function (k) {
        return h('span', { class: 'alpill', text: AL[k].icon + ' ' + AL[k][lang] });
      }));
    } else {
      fill(el.sheetAlList, [h('span', { class: 'alpill', text: ui.alNone })]);
    }

    openItem = it;
    el.sheetAdd.hidden = !ordering();
    el.sheetAdd.textContent = ui.add;
    el.sheetX.setAttribute('aria-label', ui.close);
    document.documentElement.classList.add('lock');
    if (typeof el.sheet.showModal === 'function') el.sheet.showModal();
    else el.sheet.setAttribute('open', '');
    el.sheet.scrollTop = 0;
  }

  function closeSheet() {
    if (typeof el.sheet.close === 'function') el.sheet.close();
    else el.sheet.removeAttribute('open');
    unlock();
  }

  function setActive(id) {
    var chips = el.chips.querySelectorAll('.chip');
    Array.prototype.forEach.call(chips, function (c) {
      var on = c.getAttribute('data-id') === id;
      c.setAttribute('aria-current', on ? 'true' : 'false');
      if (on) {
        var left = c.offsetLeft - (el.chips.clientWidth - c.offsetWidth) / 2;
        if (el.chips.scrollTo) el.chips.scrollTo({ left: left, behavior: reduced ? 'auto' : 'smooth' });
        else el.chips.scrollLeft = left;
      }
    });
  }

  function observe() {
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window)) return;
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setActive(e.target.id.replace('cat-', ''));
      });
    }, { rootMargin: '-70px 0px -65% 0px' });
    Array.prototype.forEach.call(el.menu.querySelectorAll('.cat'), function (s) { io.observe(s); });
  }

  function applyFilter() {
    var q = el.q.value.trim().toLocaleLowerCase(lang);
    var anyVisible = false;
    Array.prototype.forEach.call(el.menu.querySelectorAll('.cat'), function (sec) {
      var visible = 0;
      Array.prototype.forEach.call(sec.querySelectorAll('.row'), function (row) {
        var ok = !q || row.getAttribute('data-s').indexOf(q) > -1;
        if (ok) {
          var al = row.getAttribute('data-al');
          if (al) ok = !al.split(',').some(function (k) { return excluded[k]; });
        }
        row.hidden = !ok;
        if (ok) visible++;
      });
      sec.hidden = visible === 0;
      var chip = el.chips.querySelector('[data-id="' + sec.id.replace('cat-', '') + '"]');
      if (chip) chip.hidden = visible === 0;
      if (visible) anyVisible = true;
    });
    el.empty.hidden = anyVisible;
  }

  function renderAlFilter() {
    var ui = UI[lang];
    var used = {};
    DATA.categories.forEach(function (c) {
      c.items.forEach(function (it) { (it.al || []).forEach(function (k) { used[k] = true; }); });
    });
    var keys = AL_ORDER.filter(function (k) { return used[k]; });
    el.alfilter.hidden = keys.length === 0;
    el.alfilter.setAttribute('aria-label', ui.alFilter);
    fill(el.alchips, keys.map(function (k) {
      return h('button', {
        type: 'button', class: 'alchip', 'data-al': k,
        'aria-pressed': String(!!excluded[k]), text: AL[k].icon + ' ' + AL[k][lang]
      });
    }));
    updateAlSummary();
  }

  function updateAlSummary() {
    var n = Object.keys(excluded).filter(function (k) { return excluded[k]; }).length;
    var ui = UI[lang];
    el.alfilterSum.textContent = '';
    el.alfilterSum.appendChild(document.createTextNode(ui.alFilter));
    if (n) el.alfilterSum.appendChild(h('span', { class: 'cnt', text: String(n) }));
  }

  /* Satırlardaki + düğmeleri, alt çubuk ve (açıksa) sepet penceresini günceller */
  function refreshCart() {
    var ui = UI[lang];
    var on = ordering();
    var count = cartCount();

    Array.prototype.forEach.call(el.menu.querySelectorAll('.add'), function (b) {
      var q = cart[b.getAttribute('data-key')] || 0;
      b.textContent = q ? String(q) : '+';
      b.classList.toggle('has', q > 0);
    });

    el.cartbar.hidden = !on || count === 0;
    document.body.classList.toggle('has-cart', on && count > 0);
    el.cartbarN.textContent = String(count);
    el.cartbarL.textContent = ui.viewCart;
    el.cartbarP.textContent = cartSum() + ' ₺';

    if (el.cart.open) renderCart();
  }

  function renderCart() {
    var ui = UI[lang];
    var keys = Object.keys(cart);
    el.cartTitle.textContent = ui.cart;
    el.cartX.setAttribute('aria-label', ui.close);
    el.cartTotalL.textContent = ui.total;
    el.cartTotal.textContent = cartSum() + ' ₺';
    el.cartTableL.textContent = ui.table;
    el.cartNoteL.textContent = ui.note;
    el.cartSend.textContent = ui.send;
    el.cartPay.hidden = !paying();
    el.cartPay.textContent = ui.payNow;
    el.cartPay.disabled = keys.length === 0;
    el.cartSend.classList.toggle('primary', !paying());
    el.cartClear.textContent = ui.clear;
    el.cartHint.textContent = ui.cartHint;
    el.cartEmpty.textContent = ui.cartEmpty;
    el.cartEmpty.hidden = keys.length > 0;
    el.cartSend.disabled = keys.length === 0;
    el.cartClear.hidden = keys.length === 0;

    fill(el.cartList, keys.map(function (k) {
      var it = itemOf(k);
      var minus = h('button', { type: 'button', 'data-key': k, 'data-d': '-1', 'aria-label': ui.dec + ': ' + t(it.name), text: '\u2212' });
      var plus = h('button', { type: 'button', 'data-key': k, 'data-d': '1', 'aria-label': ui.inc + ': ' + t(it.name), text: '+' });
      return h('li', null, [
        h('span', { class: 'cn', text: t(it.name) }),
        h('span', { class: 'cp', text: (cart[k] * it.price) + ' ₺' }),
        h('span', { class: 'qty' }, [minus, h('span', { text: String(cart[k]) }), plus])
      ]);
    }));
  }

  function openCart() {
    renderCart();
    document.documentElement.classList.add('lock');
    if (typeof el.cart.showModal === 'function') el.cart.showModal();
    else el.cart.setAttribute('open', '');
    el.cart.scrollTop = 0;
  }

  function closeCart() {
    if (typeof el.cart.close === 'function') el.cart.close();
    else el.cart.removeAttribute('open');
    unlock();
  }

  /* Sipariş mesajı: işletme personeli okuyacağı için her zaman Türkçe */
  function orderMessage() {
    var lines = ['Merhaba, sipariş vermek istiyorum.'];
    var table = el.cartTable.value.trim();
    if (table) lines.push('Masa: ' + table);
    lines.push('');
    Object.keys(cart).forEach(function (k) {
      var it = itemOf(k);
      lines.push('\u2022 ' + cart[k] + 'x ' + (it.name.tr || t(it.name)) + ' \u2014 ' + (cart[k] * it.price) + ' \u20BA');
    });
    lines.push('');
    lines.push('Toplam: ' + cartSum() + ' \u20BA');
    var note = el.cartNote.value.trim();
    if (note) lines.push('Not: ' + note);
    return lines.join('\n');
  }

  /* ---------- Test ödeme akışı ---------- */
  function orderItems() {
    return Object.keys(cart).map(function (k) {
      var it = itemOf(k);
      return { name: it.name.tr || t(it.name), qty: cart[k], price: it.price };
    });
  }

  function renderSteps(status) {
    var ui = UI[lang];
    var order = window.OrderStore.STATUSES;
    var at = Math.max(0, order.indexOf(status));
    fill(el.paySteps, order.map(function (st, i) {
      return h('li', { class: i < at ? 'done' : (i === at ? 'now' : ''), text: ui['st_' + st] });
    }));
  }

  function showPayForm() {
    var ui = UI[lang];
    payOrderId = null;
    el.payForm.hidden = false;
    el.payDone.hidden = true;
    el.payTest.textContent = ui.payTest;
    el.payTitle.textContent = ui.payTitle;
    el.payX.setAttribute('aria-label', ui.close);
    el.payTotalL.textContent = ui.total;
    el.payTotal.textContent = cartSum() + ' ₺';
    el.payMt.textContent = ui.payMethods;
    el.payNote.textContent = ui.payNote;
    el.payGo.textContent = ui.payGo + ' ' + cartSum() + ' ₺';
    el.payGo.disabled = false;

    fill(el.paySum, Object.keys(cart).map(function (k) {
      var it = itemOf(k);
      return h('li', null, [
        h('span', { text: cart[k] + '× ' + t(it.name) }),
        h('span', { text: (cart[k] * it.price) + ' ₺' })
      ]);
    }));

    fill(el.payMethods, [['card', ui.payCard], ['wallet', ui.payWallet]].map(function (m, i) {
      var input = h('input', { type: 'radio', name: 'pm', value: m[0] });
      if (i === 0) input.checked = true;
      return h('label', { class: 'pm' }, [input, h('span', { text: m[1] })]);
    }));
  }

  function openPay() {
    if (!cartCount()) return;
    showPayForm();
    closeCart();
    document.documentElement.classList.add('lock');
    if (typeof el.pay.showModal === 'function') el.pay.showModal();
    else el.pay.setAttribute('open', '');
    el.pay.scrollTop = 0;
  }

  function closePay() {
    payToken++;
    if (typeof el.pay.close === 'function') el.pay.close();
    else el.pay.removeAttribute('open');
    unlock();
  }

  function showPaid(order) {
    var ui = UI[lang];
    payOrderId = order.id;
    el.payForm.hidden = true;
    el.payDone.hidden = false;
    el.payDoneT.textContent = ui.paidT;
    el.payNo.textContent = ui.orderNo + ' ' + order.id + (order.table ? '  ·  ' + ui.tableLbl + ' ' + order.table : '');
    el.payDd.textContent = ui.toKitchen;
    el.payClose.textContent = ui.ok;
    renderSteps(order.status);
  }

  function startPayment() {
    var ui = UI[lang];
    if (!cartCount()) return;
    var checked = el.payMethods.querySelector('input:checked');
    var method = checked ? checked.value : 'card';
    var token = ++payToken;
    el.payGo.disabled = true;
    el.payGo.textContent = ui.paying;
    setTimeout(function () {
      if (token !== payToken) return;           /* kullanıcı pencereyi kapattı */
      var order = window.OrderStore.add({
        table: el.cartTable.value.trim(),
        note: el.cartNote.value.trim(),
        items: orderItems(),
        total: cartSum(),
        method: method,
        test: true
      });
      cart = {};
      saveCart();
      el.cartNote.value = '';
      refreshCart();
      showPaid(order);
    }, reduced ? 300 : 1500);
  }

  function copyText(text, btn, ui) {
    function done() {
      btn.textContent = ui.copied;
      setTimeout(function () { btn.textContent = ui.copy; }, 1600);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { /* ignore */ });
      return;
    }
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { /* ignore */ }
    document.body.removeChild(ta);
  }

  function renderFoot() {
    var ui = UI[lang];
    var info = DATA.info;
    var actions = [];

    if (info.whatsapp) {
      actions.push(h('a', { class: 'btn primary', href: 'https://wa.me/' + info.whatsapp, target: '_blank', rel: 'noopener', text: ui.wa }));
    }
    if (info.instagram) {
      actions.push(h('a', { class: 'btn', href: 'https://instagram.com/' + info.instagram, target: '_blank', rel: 'noopener', text: ui.ig }));
    }
    if (info.review) {
      actions.push(h('a', { class: 'btn', href: info.review, target: '_blank', rel: 'noopener', text: ui.review }));
    }
    fill(el.actions, actions);

    el.wifi.textContent = '';
    if (info.wifi && info.wifi.name) {
      var btn = h('button', { type: 'button', text: ui.copy });
      btn.addEventListener('click', function () { copyText(info.wifi.pass, btn, ui); });
      el.wifi.appendChild(h('div', { class: 'wifi' }, [
        h('div', null, [
          h('p', { text: 'Wi-Fi: ' + info.wifi.name }),
          h('p', { class: 'k', text: ui.pass + ': ' + info.wifi.pass })
        ]),
        btn
      ]));
    }

    el.allergy.textContent = ui.allergy;
    el.credit.hidden = !info.credit;
    el.credit.textContent = info.credit || '';
  }

  function renderHero() {
    var info = DATA.info;
    if (info.cover) {
      el.hero.classList.add('has-cover');
      el.hero.style.backgroundImage = 'linear-gradient(color-mix(in srgb, var(--bg) 50%, transparent), var(--bg)), url("' + encodeURI(info.cover) + '")';
    }
  }

  function render() {
    var ui = UI[lang];
    document.documentElement.lang = lang;
    document.title = DATA.info.name;

    el.demo.hidden = !DATA.info.demo;
    el.demo.textContent = ui.demo;
    el.name.textContent = DATA.info.name;
    el.tagline.textContent = t(DATA.info.tagline);
    el.q.placeholder = ui.search;
    el.q.setAttribute('aria-label', ui.search);
    el.chips.setAttribute('aria-label', ui.cats);
    el.empty.textContent = ui.empty;

    el.theme.setAttribute('aria-label', ui.theme);
    el.theme.setAttribute('title', ui.theme);

    renderLangs();
    renderMenu();
    renderAlFilter();
    renderFoot();
    applyFilter();
    refreshCart();
    observe();
    if (DATA.categories.length) setActive(DATA.categories[0].id);
  }

  el.langs.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-lang]');
    if (!b) return;
    lang = b.getAttribute('data-lang');
    safeSet('menu-lang', lang);
    render();
  });

  el.chips.addEventListener('click', function (e) {
    var b = e.target.closest('.chip');
    if (!b) return;
    var id = b.getAttribute('data-id');
    var sec = document.getElementById('cat-' + id);
    if (sec) sec.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    setActive(id);
  });

  el.menu.addEventListener('click', function (e) {
    var a = e.target.closest('.add');
    if (a) { changeQty(a.getAttribute('data-key'), 1); return; }
    var b = e.target.closest('.item');
    if (!b) return;
    var it = DATA.categories[+b.getAttribute('data-c')].items[+b.getAttribute('data-i')];
    if (it) openSheet(it);
  });

  el.sheetX.addEventListener('click', closeSheet);
  el.sheet.addEventListener('click', function (e) { if (e.target === el.sheet) closeSheet(); });
  el.sheet.addEventListener('close', function () { unlock(); });

  el.q.addEventListener('input', applyFilter);

  el.alchips.addEventListener('click', function (e) {
    var b = e.target.closest('.alchip');
    if (!b) return;
    var k = b.getAttribute('data-al');
    excluded[k] = !excluded[k];
    b.setAttribute('aria-pressed', String(!!excluded[k]));
    updateAlSummary();
    applyFilter();
  });

  el.theme.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    safeSet('menu-theme', next);
    applyTheme(next);
  });

  el.sheetAdd.addEventListener('click', function () {
    if (!openItem) return;
    for (var ci = 0; ci < DATA.categories.length; ci++) {
      var ii = DATA.categories[ci].items.indexOf(openItem);
      if (ii > -1) { changeQty(ci + '-' + ii, 1); break; }
    }
    closeSheet();
  });

  el.cartbar.addEventListener('click', openCart);
  el.cartX.addEventListener('click', closeCart);
  el.cart.addEventListener('click', function (e) { if (e.target === el.cart) closeCart(); });
  el.cart.addEventListener('close', function () { unlock(); });

  el.cartList.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-key]');
    if (!b) return;
    changeQty(b.getAttribute('data-key'), +b.getAttribute('data-d'));
    if (!cartCount()) closeCart();
  });

  el.cartPay.addEventListener('click', openPay);
  el.payGo.addEventListener('click', startPayment);
  el.payX.addEventListener('click', closePay);
  el.payClose.addEventListener('click', closePay);
  el.pay.addEventListener('click', function (e) { if (e.target === el.pay) closePay(); });
  el.pay.addEventListener('close', function () { payToken++; unlock(); });
  if (window.OrderStore) {
    window.OrderStore.onChange(function () {
      if (!payOrderId || !el.pay.open) return;
      var o = window.OrderStore.get(payOrderId);
      if (o) renderSteps(o.status);
    });
  }

  el.cartClear.addEventListener('click', function () {
    cart = {};
    saveCart();
    refreshCart();
    closeCart();
  });

  el.cartSend.addEventListener('click', function () {
    if (!cartCount() || !DATA.info.whatsapp) return;
    var url = 'https://wa.me/' + DATA.info.whatsapp + '?text=' + encodeURIComponent(orderMessage());
    window.open(url, '_blank', 'noopener');
  });

  applyTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
  renderHero();
  render();
})();
