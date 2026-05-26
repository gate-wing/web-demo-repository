/* ====================================================================
   森の喫茶室 こもれび — JavaScript
   ==================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- スクロールアニメーション ---------- */
  const animEls = document.querySelectorAll(
    '.anim-fade-up, .anim-fade-left, .anim-fade-right'
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay) || 0;
      setTimeout(() => el.classList.add('is-visible'), delay);
      observer.unobserve(el);
    });
  }, {
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  });

  animEls.forEach(el => observer.observe(el));

  /* ---------- ヘッダー スクロール制御 ---------- */
  const header = document.getElementById('site-header');

  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- ハンバーガーメニュー ---------- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('global-nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    nav.classList.toggle('is-open');
    document.body.style.overflow = nav.classList.contains('is-open') ? 'hidden' : '';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('is-active');
      nav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  /* ---------- スムーズスクロール ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (!target) return;
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- ヒーロー パララックス ---------- */
  const heroPhoto = document.querySelector('.hero-photo');
  if (heroPhoto) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < 900) {
        heroPhoto.style.transform = `translateY(${scrollY * 0.12}px)`;
      }
    }, { passive: true });
  }

});
