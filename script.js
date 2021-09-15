// Navigation

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menuList");

hamburger.addEventListener("click", function () {
  hamburger.classList.add("active");
  menu.classList.add("active");
});

//Image Carousel
//listen

const imageClassName = ".carouselImage";
const images = document.querySelectorAll(imageClassName);

let currentIndex = 0;

const totalImages = images.length;

function setInitialClass() {
  console.log(images, currentIndex);
  images[currentIndex].classList.add("active");
  images[currentIndex + 1].classList.add("active");
  images[currentIndex + 2].classList.add("active");
}

// function setFollowingImages() {}

function setEventListeners() {
  const buttonLeft = document.querySelector(".carouselLeft");
  const buttonRight = document.querySelector(".carouselRight");
  buttonLeft.addEventListener("click", moveLeft);
  buttonRight.addEventListener("click", moveRight);
}

function moveLeft() {
  currentIndex = mod(currentIndex - 1, 5);
  setInitialClass();
}

function moveRight() {
  currentIndex = mod(currentIndex + 1, 5);
  setInitialClass();
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

setInitialClass();
setEventListeners();

//given an index, show 3 images starting from an index:
//- (index +1) % 5 and (index +2) % 5

//click arrow left or right, have to change the index
//- click right: index = (index + 1)% 5, if index == 4; (index +1) % 5 = 0
//- click left: index = (index - 1) % 5, if index == 0; (0-1) % 5 = 4;
