// Navigation

const myApp = {};
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menuList");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

//Image Carousel
//listen

const images = document.querySelectorAll(".carouselImage");
let currentIndex = 0;
const totalImages = images.length;

myApp.setInitialClass = function () {
  images[currentIndex].classList.add("active");
  images[currentIndex + 1].classList.add("active");
  images[currentIndex + 2].classList.add("active");
  console.log(currentIndex, currentIndex + 1, currentIndex + 2);
};

myApp.setEventListeners = function () {
  const buttonLeft = document.querySelector(".carouselLeft");
  const buttonRight = document.querySelector(".carouselRight");
  buttonLeft.addEventListener("click", myApp.moveButton);
  buttonRight.addEventListener("click", myApp.moveButton);
};

myApp.moveButton = function () {
  images[currentIndex].classList.remove("active");
  if (currentIndex + 2 >= totalImages - 1) {
    images[totalImages - 1].classList.remove("active");
    images[totalImages - 2].classList.remove("active");
    currentIndex = 0;
    myApp.setInitialClass();
  } else {
    currentIndex++;
    myApp.setInitialClass();
  }
};

myApp.init = function () {
  myApp.setInitialClass();
  myApp.setEventListeners();
};

myApp.init();
