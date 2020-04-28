// Окно входа
var popup = document.querySelector('.login-popup');
var overlay = document.querySelector('.modal-overlay');
var closePopup = document.querySelector('.login-popup__close');
var openPopup = document.querySelector('.header__login-link');
var login = popup.querySelector("[name=login]");

// Регистрация
var regPopup = document.querySelector('.reg-popup');
var regOverlay = document.querySelector('.modal-overlay');
var closeRegPopup = document.querySelector('.reg-popup__close');
var openRegPopup = document.querySelector('.login-popup__btn--reg');
var regLogin = regPopup.querySelector("[name=reg-login]");


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("login-popup--show")) {
      popup.classList.remove("login-popup--show");
      overlay.classList.remove("modal-overlay--show");
    }
  }
});


openPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("login-popup--show");
  overlay.classList.add("modal-overlay--show");
  login.focus();
});

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("login-popup--show");
  overlay.classList.remove("modal-overlay--show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("login-popup--show");
  overlay.classList.remove("modal-overlay--show");
});


// Регистрация

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (regPopup.classList.contains("reg-popup--show")) {
      regPopup.classList.remove("reg-popup--show");
      regOverlay.classList.remove("modal-overlay--show");
    }
  }
});


openRegPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove('login-popup--show');
  regPopup.classList.add("reg-popup--show");
  regOverlay.classList.add("modal-overlay--show");
  login.focus();
});

closeRegPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  regPopup.classList.remove("reg-popup--show");
  overlay.classList.remove("modal-overlay--show");
});

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  regPopup.classList.remove("reg-popup--show");
  overlay.classList.remove("modal-overlay--show");
});
