document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-header");
  const header = document.querySelector(".header"); // cambia ID por clase

  toggleBtn.addEventListener("click", () => {
    header.classList.toggle("expandido");
  });
});