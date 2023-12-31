const hamburger = document.querySelector('.header__hamburger');
const navMenu = document.querySelector('.navbar');
const main = document.querySelector('main')

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('navbar--active');
  main.classList.toggle('dim')
});
