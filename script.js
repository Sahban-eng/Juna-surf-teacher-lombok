document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const socialIcons = document.querySelector(".social-icons");
  navLinks.classList.toggle("active");
  socialIcons.classList.toggle("active"); // Toggle visibility of social icons
}
