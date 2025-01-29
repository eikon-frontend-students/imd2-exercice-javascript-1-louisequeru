var box1 = document.querySelector(".change-color");

function changeColor() {
  box1.classList.add("is-active");
}

box1.addEventListener("click", changeColor);

var box2 = document.querySelector(".toggle-color");

function toggleColor() {
  box2.classList.toggle("is-active");
}

box2.addEventListener("click", toggleColor);

var box3 = document.querySelector(".trigger");
var box4 = document.querySelector(".target");

function trigger() {
  box4.classList.toggle("is-hidden");
}

box3.addEventListener("click", trigger);

var box5 = document.querySelector(".trigger-all");

function triggerAll() {
  box1.classList.toggle("is-active");
  box2.classList.toggle("is-active");
}

box5.addEventListener("click", triggerAll);

var box6 = document.querySelector(".trigger-all-self");

function triggerAllSelf() {
  box1.classList.toggle("is-active");
  box2.classList.toggle("is-active");
  box6.classList.toggle("is-active");
}

box6.addEventListener("click", triggerAllSelf);
