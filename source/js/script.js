// Открытие/закрытие мобильного меню

var navMain = document.querySelector(".main-navigation");
var navToggle = document.querySelector(".main-navigation__toggle");

navMain.classList.remove("main-navigation--nojs");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-navigation--closed")) {
    navMain.classList.remove("main-navigation--closed");
    navMain.classList.add("main-navigation--opened");
  } else {
    navMain.classList.add("main-navigation--closed");
    navMain.classList.remove("main-navigation--opened");
  }
});

//Открытие/закрытие модального окна

var orderLink = document.querySelector(".weekly-hit__order");
var cartIcons = document.querySelectorAll(".catalog__add-to-cart");
var cartPopup = document.querySelector(".modal");
var cartForm = cartPopup.querySelector("form");
var sizes = cartForm.querySelectorAll("input");
var overlay = document.querySelector(".overlay");
var submitButton = cartForm.querySelector("button");
var ESC = 27;

var onEscPress = function (evt) {
  if (evt.keyCode === ESC) {
    closePopup();
  }
};

if (orderLink) {
  orderLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal--show");
    evt.stopPropagation();
    overlay.classList.add("overlay--show");
    document.addEventListener("keydown", onEscPress);
  });
} else if (cartIcons) {
  for (var i = 0; i < cartIcons.length; i++) {
    var element = cartIcons[i];
    element.addEventListener("click", function (evt) {
      evt.stopPropagation();
      showPopup();
      document.addEventListener("keydown", onEscPress);
    });
  }
}

cartForm.addEventListener("submit", function (evt) {
  if (!sizes[0].checked && !sizes[1].checked && !sizes[2].checked) {
    evt.preventDefault();
    alert("Пожалуйста, выберите нужный размер");
  }
});


var closePopup = function () {
  cartPopup.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
  document.removeEventListener("keydown", onEscPress);
};

var showPopup = function () {
  cartPopup.classList.add("modal--show");
  overlay.classList.add("overlay--show");
}

overlay.addEventListener("click", function (evt) {
  var target = evt.target;
  if (!cartPopup.contains(target)) {
    closePopup();
  }
});
