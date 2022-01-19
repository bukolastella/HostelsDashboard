"use strict";
const slide = document.querySelectorAll(".slider_image");
const btnRight = document.querySelector(".slider-btn-right");
const btnLeft = document.querySelector(".slider-btn-left");

console.log(btnRight, btnLeft);

const goToSlide = function (slides) {
  console.log(slides);
  slide.forEach((s, i) => {
    if (100 * (i - slides) === 200) {
      s.style.transform = `translateX( ${-100}%)`;
    } else if (100 * (i - slides) === -200) {
      s.style.transform = `translateX( ${100}%)`;
    } else {
      s.style.transform = `translateX( ${100 * (i - slides)}%)`;
    }
  });
};

const nextSlide = function () {
  console.log("mmm");
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;
  // curslide = 1{first slide}  we want -100% 0% 200% etc.
  goToSlide(curSlide);
  activeDots(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSlide(curSlide);
  activeDots(curSlide);
};

//
let curSlide = 0;
const maxSlide = slide.length;
goToSlide(0);
activeDots(0);
//dots
// slide.forEach((s, i) =>
//   dots.insertAdjacentHTML(
//     "beforeend",
//     `<button class="dot" data-slide="${i}"></button>`
//   )
// );
// const activeDots = function (slide) {
//   document
//     .querySelectorAll(".dot")
//     .forEach((d) => d.classList.remove("dot-active"));
//   document
//     .querySelector(`.dot[data-slide="${slide}"]`)
//     .classList.add("dot-active");
// };
