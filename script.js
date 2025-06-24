
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const closeMenu = document.getElementById('close-menu');

  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('is-active');
  });

  closeMenu.addEventListener('click', () => {
    mobileNav.classList.remove('is-active');
  });
});
