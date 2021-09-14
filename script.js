// Navigation

let hamburger = document.querySelector(".hamburger");
let menu = document.querySelector(".menuList");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
