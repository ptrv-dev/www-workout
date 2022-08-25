// Header Burger
const burgerButton = document.querySelector("button.burger-header");
const headerNav = document.querySelector("nav.nav");

burgerButton.addEventListener("click", (e) => {
    e.preventDefault();
    burgerButton.classList.toggle("burger-header_active");
    headerNav.classList.toggle("nav_active");
    document.body.classList.toggle("no-scroll");
})

// Dynamic adaptive

const dynamicAdaptive = () => {
    const link = document.querySelector(".latest-training__link");
    if (window.innerWidth <= 425) {
        document.querySelector(".latest-training__content").append(link);
        link.classList.add("button");
        link.innerHTML = "See more";
    } else {
        document.querySelector(".latest-training__header").append(link);
        if (link.classList.contains("button")) link.classList.remove("button");
        if (link.innerHTML === "See more") link.innerHTML = "See more here";
    }
}


window.addEventListener("resize", () => dynamicAdaptive());
window.addEventListener("load", () => dynamicAdaptive());