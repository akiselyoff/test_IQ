const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("show");
});

closeMenu.addEventListener("click", function () {
  menu.classList.remove("show");
});
