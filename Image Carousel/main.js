const container = document.querySelector(".carousel-container");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const imgs = document.querySelectorAll("img");

let current = 0;

const interval = setInterval(forward, 2000);

next.addEventListener("click", forward);
prev.addEventListener("click", () => {
  current--;
  changeImg();
});

function changeImg() {
  if (current > imgs.length - 1) {
    current = 0;
  } else if (current < 0) {
    current = imgs.length - 1;
  }
  container.style.transform = `translateX(${-current * 500}px)`;
}

function forward() {
  current++;
  changeImg();
}
