document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", function () {
        window.scrollTo({ top: 600, behavior: "smooth" });
    });
});
