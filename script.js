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