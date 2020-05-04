var menu = document.querySelector('.header__menu');
var openMenu = document.querySelector('.header__toggle--open');
var closeMenu = document.querySelector('.header__toggle--close');

openMenu.addEventListener("click", function (evt) {
	evt.preventDefault();
	openMenu.classList.remove("header__toggle--show");
	closeMenu.classList.add("header__toggle--show");
  menu.classList.add("header__menu--show")
});

closeMenu.addEventListener("click", function (evt) {
	evt.preventDefault();
	openMenu.classList.add("header__toggle--show");
	closeMenu.classList.remove("header__toggle--show");
  menu.classList.remove("header__menu--show")
});
