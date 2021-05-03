// console.log("hello world!");
const body = document.querySelector("body");
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const header__mobilemenu = document.querySelector(".header__mobilemenu");

btnHamburger.addEventListener("click", function () {
  console.log("click hamburger");
  // Click to close hamburger
  if (header.classList.contains("open")) {
    // Remove open from head
    header.classList.remove("open");
    // Animate overlay fading out
    overlay.classList.remove("overlay-fade-in");
    overlay.classList.add("overlay-fade-out");
    // Animate mobile menu fading out
    header__mobilemenu.classList.remove("overlay-fade-in");
    header__mobilemenu.classList.add("overlay-fade-out");
    // Enable body scrolling again
    body.classList.remove("noscroll");
  }
  // Click to open hamburger
  else {
    header.classList.add("open");
    overlay.classList.remove("overlay-fade-out");
    overlay.classList.add("overlay-fade-in");
    header__mobilemenu.classList.remove("overlay-fade-out");
    header__mobilemenu.classList.add("overlay-fade-in");
    body.classList.add("noscroll");
  }
});
