const mobileNavButton = document.querySelector(".mobile-navigation-button");
const topNavigationSection = document.getElementById("top-nav");
const body = document.getElementsByTagName("body")[0];

mobileNavButton.addEventListener("click", function () {
  topNavigationSection.classList.toggle("menu-open");
  body.classList.toggle("no-over-flow");
});
