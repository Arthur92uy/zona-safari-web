document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-header");
    const header = document.querySelector(".header");
    if (toggleBtn && header) {
        toggleBtn.addEventListener("click", () => {
        header.classList.toggle("expandido");
        });
    }
});