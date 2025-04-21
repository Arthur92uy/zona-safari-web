document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-header");
    const header = document.getElementById("header");
  
    toggleBtn.addEventListener("click", () => {
      header.classList.toggle("expandido");
    });
  });