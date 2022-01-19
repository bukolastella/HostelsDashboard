"use strict";
const slide = document.querySelectorAll(".slider_image");

const goToSlide = function (slides) {
  slide.forEach((s, i) => {
    if (i - slides === maxSlide - 1) {
      s.style.transform = `translateX( ${-103}%)`;
    } else if (i - slides === -(maxSlide - 1)) {
      s.style.transform = `translateX( ${103}%)`;
    } else {
      s.style.transform = `translateX( ${103 * (i - slides)}%)`;
    }
  });
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) curSlide = 0;
  else curSlide++;
  // curslide = 1{first slide}  we want -100% 0% 200% etc.
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) curSlide = maxSlide - 1;
  else curSlide--;
  goToSlide(curSlide);
};

//
let curSlide = 0;
const maxSlide = slide.length;
goToSlide(0);
