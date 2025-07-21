const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll("header nav a");

if (menuIcon && navbar) {
  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("active");
  });
}

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      menuIcon.classList.remove("active");
    }
  });
});
