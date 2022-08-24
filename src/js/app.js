// Header Burger
const burgerButton = document.querySelector("button.burger-header");
const headerNav = document.querySelector("nav.nav");

burgerButton.addEventListener("click", (e) => {
    e.preventDefault();
    burgerButton.classList.toggle("burger-header_active");
    headerNav.classList.toggle("nav_active");
    document.body.classList.toggle("no-scroll");
})