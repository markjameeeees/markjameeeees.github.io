const menu = document.querySelector('#mobile__menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);