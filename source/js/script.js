// Открытие/закрытие мобильного меню

var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');

navMain.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-navigation--closed')) {
    navMain.classList.remove('main-navigation--closed');
    navMain.classList.add('main-navigation--opened');
  } else {
    navMain.classList.add('main-navigation--closed');
    navMain.classList.remove('main-navigation--opened');
  }
});

//Открытие/закрытие модального окна

var orderLink = document.querySelector(".weekly-hit__order");
var cartPopup = document.querySelector(".modal");
var cartForm = cartPopup.querySelector("form");
var body = document.querySelector('body');

orderLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal--show");
  evt.stopPropagation();
});

cartForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

var closePopup = function () {
  cartPopup.classList.remove('modal--show');
};

document.addEventListener('click', function (evt) {
  var target = evt.target;
  if (!cartPopup.contains(target)) {
    closePopup();
  }
});
