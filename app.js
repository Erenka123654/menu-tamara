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
      demo: 'DEMO — örnek menü', cats: 'Menü kategorileri'
    },
    en: {
      search: 'Search the menu', empty: 'No matching items. Try another word.',
      p: 'Popular', v: 'Vegetarian', s: 'Spicy', close: 'Close',
      wa: 'Message us on WhatsApp', ig: 'Instagram', review: 'Leave a Google review',
      pass: 'Password', copy: 'Copy', copied: 'Copied',
      allergy: 'If you have an allergy, please tell our staff before ordering.',
      demo: 'DEMO — sample menu', cats: 'Menu categories'
    },
    de: {
      search: 'Menü durchsuchen', empty: 'Keine passenden Gerichte. Versuchen Sie ein anderes Wort.',
      p: 'Beliebt', v: 'Vegetarisch', s: 'Scharf', close: 'Schließen',
      wa: 'Per WhatsApp schreiben', ig: 'Instagram', review: 'Google-Bewertung abgeben',
      pass: 'Passwort', copy: 'Kopieren', copied: 'Kopiert',
      allergy: 'Bei Allergien informieren Sie bitte vor der Bestellung unser Personal.',
      demo: 'DEMO — Beispielmenü', cats: 'Menükategorien'
    },
    ru: {
      search: 'Поиск по меню', empty: 'Ничего не найдено. Попробуйте другое слово.',
      p: 'Популярное', v: 'Вегетарианское', s: 'Острое', close: 'Закрыть',
      wa: 'Написать в WhatsApp', ig: 'Instagram', review: 'Оставить отзыв в Google',
      pass: 'Пароль', copy: 'Копировать', copied: 'Скопировано',
      allergy: 'При аллергии, пожалуйста, сообщите об этом официанту перед заказом.',
      demo: 'ДЕМО — пример меню', cats: 'Категории меню'
    }
  };

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
    sheetTags: document.getElementById('sheet-tags')
  };

  var lang = pickLang();
  var io = null;

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
          type: 'button', class: 'item', 'data-c': String(ci), 'data-i': String(ii),
          'data-s': (name + ' ' + desc).toLocaleLowerCase(lang)
        }, [txt]);

        if (it.img || showEmpty) {
          var ph = h('span', { class: 'ph' });
          paintPhoto(ph, it, name);
          node.appendChild(ph);
        } else {
          node.classList.add('solo');
        }
        kids.push(node);
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
    el.sheetX.setAttribute('aria-label', ui.close);
    document.documentElement.classList.add('lock');
    if (typeof el.sheet.showModal === 'function') el.sheet.showModal();
    else el.sheet.setAttribute('open', '');
    el.sheet.scrollTop = 0;
  }

  function closeSheet() {
    if (typeof el.sheet.close === 'function') el.sheet.close();
    else el.sheet.removeAttribute('open');
    document.documentElement.classList.remove('lock');
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
      Array.prototype.forEach.call(sec.querySelectorAll('.item'), function (it) {
        var ok = !q || it.getAttribute('data-s').indexOf(q) > -1;
        it.hidden = !ok;
        if (ok) visible++;
      });
      sec.hidden = visible === 0;
      var chip = el.chips.querySelector('[data-id="' + sec.id.replace('cat-', '') + '"]');
      if (chip) chip.hidden = visible === 0;
      if (visible) anyVisible = true;
    });
    el.empty.hidden = anyVisible;
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
      el.hero.style.backgroundImage = 'linear-gradient(rgba(11,24,32,.5), #0B1820), url("' + encodeURI(info.cover) + '")';
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

    renderLangs();
    renderMenu();
    renderFoot();
    applyFilter();
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
    var b = e.target.closest('.item');
    if (!b) return;
    var it = DATA.categories[+b.getAttribute('data-c')].items[+b.getAttribute('data-i')];
    if (it) openSheet(it);
  });

  el.sheetX.addEventListener('click', closeSheet);
  el.sheet.addEventListener('click', function (e) { if (e.target === el.sheet) closeSheet(); });
  el.sheet.addEventListener('close', function () { document.documentElement.classList.remove('lock'); });

  el.q.addEventListener('input', applyFilter);

  renderHero();
  render();
})();
