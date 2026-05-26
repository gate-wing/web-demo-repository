/* ═══════════════════════════════════════════
   ENCRE CAFÉ — JavaScript
═══════════════════════════════════════════ */

'use strict';

/* ─── Menu data ────────────────────────────── */
const menuData = {
  coffee: [
    {
      name: 'Espresso',
      desc: 'シングルオリジン豆を使用した、深みのあるエスプレッソ。余韻に甘みが漂います。',
      price: '¥580',
      tag: 'Hot / Iced',
    },
    {
      name: 'Flat White',
      desc: '濃厚なダブルショットに、きめ細かいマイクロフォームを重ねたオーストラリア発祥の一杯。',
      price: '¥680',
      tag: 'Hot',
    },
    {
      name: 'Pour Over',
      desc: '本日のシングルオリジンを、ハリオV60で丁寧にドリップ。豆の個性をストレートに。',
      price: '¥780',
      tag: 'Hot',
    },
    {
      name: 'Cold Brew',
      desc: '12時間低温抽出。なめらかで甘い口当たりのコールドブリュー。',
      price: '¥720',
      tag: 'Iced',
    },
    {
      name: 'Cortado',
      desc: 'エスプレッソとスチームミルクを1:1で合わせたスペインの小さな一杯。',
      price: '¥640',
      tag: 'Hot',
    },
    {
      name: 'Café Latte',
      desc: '柔らかいフォームミルクと深みのあるエスプレッソのバランスが心地よい定番。',
      price: '¥660',
      tag: 'Hot / Iced',
    },
  ],
  tea: [
    {
      name: 'Darjeeling First Flush',
      desc: 'インド・ダージリン産の一番摘み。清らかでフローラルな香りが際立ちます。',
      price: '¥680',
      tag: 'Hot',
    },
    {
      name: 'Hojicha Latte',
      desc: '香ばしく焙じた京都産ほうじ茶とスチームミルクの温かな組み合わせ。',
      price: '¥700',
      tag: 'Hot / Iced',
    },
    {
      name: 'Sparkling Yuzu Soda',
      desc: '国産柚子シロップと炭酸水のさっぱりとした季節のドリンク。',
      price: '¥650',
      tag: 'Iced',
    },
    {
      name: 'Chamomile &amp; Honey',
      desc: 'カモミールと国産はちみつ。心を落ち着かせる夜のためのハーブティー。',
      price: '¥620',
      tag: 'Hot',
    },
  ],
  food: [
    {
      name: 'クロワッサン',
      desc: '毎朝仕込む自家製クロワッサン。バターの香りとサクサクの食感。',
      price: '¥380',
      tag: '焼きたて',
    },
    {
      name: 'バスクチーズケーキ',
      desc: 'ほろ苦いカラメルと濃厚なクリームチーズのコントラスト。珈琲との相性は抜群。',
      price: '¥520',
      tag: 'Dessert',
    },
    {
      name: 'カスタードトースト',
      desc: '厚切りブリオッシュに手作りカスタードクリームを贅沢に。',
      price: '¥680',
      tag: 'Morning',
    },
    {
      name: 'フルーツタルト',
      desc: '季節のフルーツをのせたサクサクのタルト。仕入れにより内容が変わります。',
      price: '¥600',
      tag: 'Seasonal',
    },
    {
      name: 'アフォガート',
      desc: 'バニラジェラートにエスプレッソを注いだイタリアンデザート。',
      price: '¥680',
      tag: 'Dessert',
    },
  ],
};

/* ─── Render menu ──────────────────────────── */
function renderMenu(category) {
  const grid = document.getElementById('menuGrid');
  const items = menuData[category] || [];

  grid.classList.add('fade-out');

  setTimeout(() => {
    grid.innerHTML = items.map(item => `
      <div class="menu-card">
        <p class="menu-card__name">${item.name}</p>
        <p class="menu-card__desc">${item.desc}</p>
        <div class="menu-card__footer">
          <span class="menu-card__price">${item.price}</span>
          <span class="menu-card__tag">${item.tag}</span>
        </div>
      </div>
    `).join('');

    grid.classList.remove('fade-out');
    grid.classList.add('fade-in');
    setTimeout(() => grid.classList.remove('fade-in'), 300);
  }, 200);
}

/* ─── Tab switching ────────────────────────── */
function initTabs() {
  const tabs = document.querySelectorAll('.menu-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      renderMenu(tab.dataset.category);
    });
  });
}

/* ─── Navigation ───────────────────────────── */
function initNav() {
  const nav    = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('mobileMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    menu.classList.toggle('open', open);
    menu.setAttribute('aria-hidden', !open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  });
}

/* ─── Scroll reveal ────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('.js-reveal, .reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(el => observer.observe(el));
}

/* ─── Hero lines on load ───────────────────── */
function initHero() {
  const heroEls = document.querySelectorAll('.hero .reveal');
  heroEls.forEach(el => {
    setTimeout(() => el.classList.add('in'), 200);
  });
}

/* ─── Active nav link highlight ────────────── */
function initActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav__links a');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.removeAttribute('data-active'));
          const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
          if (active) active.setAttribute('data-active', '');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

/* ─── Smooth anchor scroll ─────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ─── Boot ─────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderMenu('coffee');
  initTabs();
  initNav();
  initHero();
  initReveal();
  initActiveLink();
  initSmoothScroll();
});
