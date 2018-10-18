'use strict';
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

var cartIcons = document.querySelectorAll(".catalog__add-to-cart");
var cartPopup = document.querySelector(".modal");
var body = document.querySelector("body");

var showPopup = function () {
  cartPopup.classList.add("modal--show");
}

var closePopup = function () {
  cartPopup.classList.remove('modal--show');
};

document.addEventListener('click', function (evt) {
  var target = evt.target;
  if (!cartPopup.contains(target)) {
    closePopup();
  }
});

for (var i = 0; i < cartIcons.length; i++) {
  var element = cartIcons[i];
  element.addEventListener('click', function(evt) {
    evt.stopPropagation();
    showPopup();
  });
}
