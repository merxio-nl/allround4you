const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
const year = document.querySelector('#year');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox img');
const lightboxClose = document.querySelector('.lightbox-close');

if (year) {
  year.textContent = new Date().getFullYear();
}

function setMenuState(isOpen) {
  if (!nav || !navToggle) return;

  nav.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navToggle.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
  navToggle.textContent = isOpen ? '×' : '☰';
}

navToggle?.addEventListener('click', () => {
  setMenuState(!nav.classList.contains('is-open'));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('is-open')) return;
  if (nav.contains(event.target) || navToggle?.contains(event.target)) return;
  setMenuState(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 980) setMenuState(false);
});

function openLightbox(src, alt) {
  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = src;
  lightboxImg.alt = alt || 'Projectfoto groot';
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
  lightboxClose?.focus();
}

function closeLightbox() {
  if (!lightbox || !lightboxImg) return;

  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImg.src = '';
  document.body.classList.remove('lightbox-open');
}

document.querySelectorAll('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const preview = item.querySelector('img');
    openLightbox(item.dataset.full, preview?.alt);
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeLightbox();
    setMenuState(false);
  }

  if (event.key === 'Tab' && lightbox?.classList.contains('is-open')) {
    event.preventDefault();
    lightboxClose?.focus();
  }
});
