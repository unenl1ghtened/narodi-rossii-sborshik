export const useBurger = () => {
  if (window.innerWidth > 768) return;

  const overflow = document.querySelector('.overflow');

  document.addEventListener('click', function (e) {
    const burgerIcon = e.target.closest('.burger-icon');
    const burgerNavLink = e.target.closest('.nav__link');

    function closeMenu() {
      document.body.classList.remove('body--opened-menu');
      overflow?.classList.remove('active');
    }

    if (!burgerIcon && !burgerNavLink) return;
    if (document.documentElement.clientWidth > 900) return;

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu');
      overflow?.classList.add('active');
    } else {
      closeMenu();
    }

    overflow?.addEventListener('click', () => {
      closeMenu();
    });
  });
};
