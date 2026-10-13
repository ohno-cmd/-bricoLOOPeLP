/* bricoLOOPe LP — 最小限のJS(本文はHTMLに直接記述。JSが無くても全文が読める) */
(function () {
  'use strict';

  var config = window.LP_CONFIG || {};
  var hasIO = 'IntersectionObserver' in window;

  /* ---------- Metaピクセル(IDがあるときだけ読み込む) ---------- */
  if (config.metaPixelId) {
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
      t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
    }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', config.metaPixelId);
    window.fbq('track', 'PageView');
  }

  /* ---------- CTAクリック計測(hero / sticky / offer / closing) ---------- */
  document.querySelectorAll('[data-cta]').forEach(function (link) {
    link.addEventListener('click', function () {
      var position = link.getAttribute('data-cta');
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'cta_click', {
          cta_position: position,
          link_url: link.href,
          transport_type: 'beacon'
        });
      }
      if (typeof window.fbq === 'function') {
        window.fbq('trackCustom', 'CTAClick', { cta_position: position });
      }
    });
  });

  /* ---------- ヘッダー:スクロールで白背景 ---------- */
  var header = document.getElementById('site-header');
  var hero = document.getElementById('hero');
  function onScrollHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > hero.offsetHeight - 56);
  }

  /* ---------- 表示演出(画面外の要素だけを初期非表示にする) ---------- */
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pending = [];
  if (hasIO && !reduceMotion) {
    var vh = window.innerHeight;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting || e.boundingClientRect.top < 0) show(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      if (el.getBoundingClientRect().top < vh) return; // 画面内・画面より上は最初から表示
      el.classList.add('is-pending');
      pending.push(el);
      io.observe(el);
    });

    function show(el) {
      if (el.classList.contains('is-in')) return;
      el.classList.add('is-in');
      io.unobserve(el);
    }

    // 高速スクロールやページ内ジャンプで交差判定を飛ばした要素を拾う保険
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var limit = window.innerHeight;
        pending = pending.filter(function (el) {
          if (el.classList.contains('is-in')) return false;
          if (el.getBoundingClientRect().top < limit) { show(el); return false; }
          return true;
        });
      });
    }, { passive: true });
  }

  /* ---------- 野生の真実:タップで内臓の画像を表示 ---------- */
  var revealPhoto = document.getElementById('reveal-photo');
  if (revealPhoto) {
    var revealBtn = revealPhoto.querySelector('button');
    revealBtn.addEventListener('click', function () {
      var open = revealPhoto.classList.toggle('is-open');
      revealBtn.setAttribute('aria-pressed', open ? 'true' : 'false');
    });
  }

  /* ---------- 口コミ:scroll-snap のスワイプ+矢印+枚数表示 ---------- */
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('[data-carousel-track]');
    var items = Array.prototype.slice.call(track.children);
    var current = root.querySelector('[data-carousel-current]');
    var prev = root.querySelector('[data-carousel-prev]');
    var next = root.querySelector('[data-carousel-next]');
    root.querySelector('[data-carousel-total]').textContent = items.length;

    function index() {
      var center = track.scrollLeft + track.clientWidth / 2;
      var best = 0, bestDist = Infinity;
      items.forEach(function (item, i) {
        var d = Math.abs(item.offsetLeft + item.offsetWidth / 2 - center);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      return best;
    }
    function update() {
      var i = index();
      current.textContent = i + 1;
      prev.disabled = i === 0;
      next.disabled = i === items.length - 1;
    }
    function go(i) {
      i = Math.max(0, Math.min(items.length - 1, i));
      var item = items[i];
      track.scrollTo({
        left: item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2,
        behavior: reduceMotion ? 'auto' : 'smooth'
      });
    }
    prev.addEventListener('click', function () { go(index() - 1); });
    next.addEventListener('click', function () { go(index() + 1); });
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(index() - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(index() + 1); }
    });
    var raf = 0;
    track.addEventListener('scroll', function () {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }, { passive: true });
    update();
  });

  /* ---------- 追従バー:ヒーロー通過後に表示、オファーのCTAが見えている間は隠す ---------- */
  var bar = document.getElementById('sticky-bar');
  var offerCta = document.getElementById('offer-cta');
  var heroPassed = false, offerVisible = false;
  function updateBar() {
    var visible = heroPassed && !offerVisible;
    bar.classList.toggle('is-visible', visible);
    bar.setAttribute('aria-hidden', visible ? 'false' : 'true');
    bar.querySelector('a').tabIndex = visible ? 0 : -1;
  }
  if (hasIO) {
    new IntersectionObserver(function (entries) {
      var e = entries[0];
      heroPassed = !e.isIntersecting && e.boundingClientRect.top < 0;
      updateBar();
    }).observe(hero);
    // オファーと締めのCTAが見えている間は、ボタンが重ならないよう隠す
    var visibleCtas = new Set();
    var ctaIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) visibleCtas.add(e.target); else visibleCtas.delete(e.target);
      });
      offerVisible = visibleCtas.size > 0;
      updateBar();
    });
    ctaIO.observe(offerCta);
    document.querySelectorAll('[data-cta="closing"]').forEach(function (el) { ctaIO.observe(el); });
  } else {
    bar.classList.add('is-visible');
  }

  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();
  updateBar();
})();
