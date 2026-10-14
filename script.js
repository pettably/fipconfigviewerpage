/**
 * FIP Config Viewer — Official Website Interactivity
 * Features:
 *  - Screenshot Gallery Tab Switching
 *  - Panel Support Matrix Brand Filter
 *  - Mobile Navigation
 *  - Store Link Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initShowcase();
  initPanelMatrix();
  initMobileNav();
  initStoreLinks();
});

/* --------------------------------------------------------------------------
   1. Showcase Screenshot Tabs
   -------------------------------------------------------------------------- */
function initShowcase() {
  const tabs = document.querySelectorAll('.showcase-tab');
  const slides = document.querySelectorAll('.screenshot-slide');
  const windowTitle = document.getElementById('windowTitleText');

  const titles = {
    'tab-configs': 'FIP Config Viewer — Config Library & Instant Search',
    'tab-summary': 'FIP Config Viewer — Site Statistics & Loop Device Allocations',
    'tab-nodes': 'FIP Config Viewer — Simplex Multi-Node Network Topology'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      tabs.forEach(t => t.classList.remove('active'));
      slides.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const activeSlide = document.getElementById(target);
      if (activeSlide) {
        activeSlide.classList.add('active');
      }
      if (windowTitle && titles[target]) {
        windowTitle.textContent = titles[target];
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. Panel Support Matrix Brand Filtering
   -------------------------------------------------------------------------- */
function initPanelMatrix() {
  const brandButtons = document.querySelectorAll('.matrix-brand-btn');
  const panelCards = document.querySelectorAll('.panel-card');

  if (!brandButtons.length || !panelCards.length) return;

  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const activeBrand = btn.dataset.filter || 'all';

      panelCards.forEach(card => {
        const cardBrand = card.dataset.brand || '';
        if (activeBrand === 'all' || cardBrand === activeBrand) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   3. Mobile Navigation
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   4. Store Links Protocol Support
   -------------------------------------------------------------------------- */
function initStoreLinks() {
  const storeBtns = document.querySelectorAll('.ms-store-link');
  const isWindows = navigator.userAgent.indexOf('Windows') !== -1;

  storeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      if (isWindows) {
        e.preventDefault();
        const storeProtocolUrl = 'ms-windows-store://pdp/?productid=9mz8tl0hw1b6';
        window.location.href = storeProtocolUrl;
      }
    });
  });
}
