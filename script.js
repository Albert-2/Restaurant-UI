let open = document.querySelector(".open");
let close = document.querySelector(".close");

open.addEventListener("click", (e) => {
  document.querySelector(".menu").classList.add("right-0");
  document.querySelector(".menu").classList.add("top-0");
  document.querySelector(".menu").classList.toggle("right-[300%]");
});

close.addEventListener("click", (e) => {
  document.querySelector(".menu").classList.toggle("right-[300%]");
});

const animation1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("myShow");
    } else {
      entry.target.classList.remove("myShow");
    }
  });
});
const animation2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("myShowRight");
    } else {
      entry.target.classList.remove("myShowRight");
    }
  });
});
const animation3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("popIn");
    } else {
      entry.target.classList.remove("popIn");
    }
  });
});
const demo1 = document.querySelectorAll(".myHidden");
demo1.forEach((temp) => animation1.observe(temp));
const demo2 = document.querySelectorAll(".myHiddenRight");
demo2.forEach((temp) => animation2.observe(temp));
const demo3 = document.querySelectorAll(".popOut");
demo3.forEach((temp) => animation3.observe(temp));

const options = {};

const animation4 = new IntersectionObserver(function (entries, animation4) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".navigation").classList.remove("myBlur");
      document.querySelector(".navigation").classList.add("absolute");
    } else {
      document.querySelector(".navigation").classList.add("myBlur");
      document.querySelector(".navigation").classList.remove("absolute");
    }
  });
});

const temp = document.querySelector(".demo");
animation4.observe(temp);
