/**
 * FIP Config Viewer — Official Website Interactivity
 * Features:
 *  - Screenshot Gallery Tab Switching & Lightbox
 *  - Panel Support Matrix Filter & Search
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
   1. Showcase Screenshot Tabs & Lightbox
   -------------------------------------------------------------------------- */
function initShowcase() {
  const tabs = document.querySelectorAll('.showcase-tab');
  const slides = document.querySelectorAll('.screenshot-slide');
  const windowTitle = document.getElementById('windowTitleText');
  const lightbox = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const expandBtn = document.getElementById('windowExpandBtn');

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

  // Open Lightbox on image click or expand button
  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'App Screenshot';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.screenshot-img-wrap img').forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.src, img.alt);
    });
  });

  if (expandBtn) {
    expandBtn.addEventListener('click', () => {
      const currentActiveImg = document.querySelector('.screenshot-slide.active img');
      if (currentActiveImg) {
        openLightbox(currentActiveImg.src, currentActiveImg.alt);
      }
    });
  }

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });
}

/* --------------------------------------------------------------------------
   2. Panel Support Matrix Filtering & Search
   -------------------------------------------------------------------------- */
function initPanelMatrix() {
  const brandButtons = document.querySelectorAll('.matrix-brand-btn');
  const searchInput = document.getElementById('matrixSearchInput');
  const panelCards = document.querySelectorAll('.panel-card');

  if (!brandButtons.length || !panelCards.length) return;

  let activeBrand = 'all';
  let searchTerm = '';

  function filterCards() {
    panelCards.forEach(card => {
      const cardBrand = card.dataset.brand || '';
      const textContent = card.textContent.toLowerCase();

      const matchesBrand = (activeBrand === 'all' || cardBrand === activeBrand);
      const matchesSearch = (!searchTerm || textContent.includes(searchTerm));

      if (matchesBrand && matchesSearch) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  brandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      brandButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeBrand = btn.dataset.filter || 'all';
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }
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
    btn.addEventListener('click', () => {
      if (isWindows) {
        const storeProtocolUrl = 'ms-windows-store://pdp/?productid=9mz8tl0hw1b6';
        window.location.href = storeProtocolUrl;
      }
    });
  });
}
