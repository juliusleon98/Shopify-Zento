if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  document.querySelectorAll('.header__inline-menu header-menu').forEach((menu) => {
    const details = menu.querySelector(':scope > details.mega-menu');
    if (!details) return;

    let closeTimer;

    menu.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      details.setAttribute('open', '');
    });

    menu.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => {
        details.removeAttribute('open');
      }, 150);
    });
  });
}
