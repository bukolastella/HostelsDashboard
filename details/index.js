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
// sticky implementation
const stickyDisplay = document.getElementById("stickyDisplay");
const stickyElement = document.getElementById("stickyElement");

const stickyNav = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) stickyElement.classList.add("sticky");
  else stickyElement.classList.remove("sticky");
  // if (!entry.isIntersecting && !stickyElement.classList.contains("yoo")) {
  //   stickyElement.classList.add("yoo");
  //   return;
  // }
  // if (entry.isIntersecting) {
  //   stickyElement.classList.remove("sticky");
  //   stickyElement.classList.add("yoo");
  // }
  // if (!entry.isIntersecting && stickyElement.classList.contains("yoo")) {
  //   stickyElement.classList.add("sticky");
  //   stickyElement.classList.remove("yoo");
  // }
};

const stickyDisplayObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

stickyDisplayObserver.observe(stickyDisplay);
