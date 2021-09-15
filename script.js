// Navigation

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menuList");

hamburger.addEventListener("click", function () {
  hamburger.classList.add("active");
  menu.classList.add("active");
});

//Image Carousel
//listen

// const imageClassName = ;
const images = document.querySelectorAll(".carouselImage");
let currentIndex = 0;
const totalImages = images.length;

function setInitialClass() {
  images[currentIndex].classList.add("active");
  images[currentIndex + 1].classList.add("active");
  images[currentIndex + 2].classList.add("active");
  console.log(currentIndex, currentIndex + 1, currentIndex + 2);
}

function setEventListeners() {
  const buttonLeft = document.querySelector(".carouselLeft");
  const buttonRight = document.querySelector(".carouselRight");
  buttonLeft.addEventListener("click", moveButton);
  buttonRight.addEventListener("click", moveButton);
}

function moveButton() {
  images[currentIndex].classList.remove("active");
  if (currentIndex + 2 >= totalImages - 1) {
    images[totalImages - 1].classList.remove("active");
    images[totalImages - 2].classList.remove("active");
    currentIndex = 0;
    setInitialClass();
  } else {
    currentIndex++;
    setInitialClass();
  }
}

// function mod(n, m) {
//   return ((n % m) + m) % m;
// }

setInitialClass();
setEventListeners();
// currentIndex = (currentIndex + 1) % 5;
//given an index, show 3 images starting from an index:
//- (index +1) % 5 and (index +2) % 5

//click arrow left or right, have to change the index
//- click right: index = (index + 1)% 5, if index == 4; (index +1) % 5 = 0
//- click left: index = (index - 1) % 5, if index == 0; (0-1) % 5 = 4;
