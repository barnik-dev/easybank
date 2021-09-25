const openMenuBtn = document.querySelector(".menu-open");
const closeMenuBtn = document.querySelector(".menu-close");
const navbar = document.querySelector(".navbar");

openMenuBtn.addEventListener("click", () => {
  navbar.classList.remove("hidden");
  openMenuBtn.classList.add("hidden");
  closeMenuBtn.classList.remove("hidden");
});

closeMenuBtn.addEventListener("click", () => {
  navbar.classList.add("hidden");
  openMenuBtn.classList.remove("hidden");
  closeMenuBtn.classList.add("hidden");
});
