const password = document.querySelector("input[type=password]");

password.addEventListener("input", (e) => {
  let i = 20;
  let pass = e.target.value;
  i -= pass.length + 1;
  document.body.style.backdropFilter = `blur(${i}px)`;
});
