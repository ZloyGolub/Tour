
function slowScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".LogoText").addEventListener("click", function () {
        slowScroll(".top");
    });
});