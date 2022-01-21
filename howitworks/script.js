"use strict";
const blocks = document.querySelectorAll(".timeline-content");
const icons = document.querySelectorAll(".icon");
blocks.forEach((s, i) => {
  if (i % 2 == 0) {
    s.style.backgroundColor = `#429523`;
  }
});
icons.forEach((s, i) => {
  if (i % 2 == 0) {
    s.style.backgroundColor = `#429523`;
  }
});
