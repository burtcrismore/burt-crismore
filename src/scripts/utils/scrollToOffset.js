function initScrollToOffset() {
  document.querySelectorAll('.page-nav').forEach(nav => {
    const offset = parseInt(nav.dataset.offset, 10) || 0;

    nav.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const id = link.getAttribute('href').slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      const rawTop = target.getBoundingClientRect().top + window.scrollY - offset;
      const maxTop = document.documentElement.scrollHeight - window.innerHeight;
      const top = Math.min(rawTop, maxTop);

      window.history.pushState({}, '', `#${id}`);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollToOffset);
} else {
  initScrollToOffset();
}
