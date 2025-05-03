document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-header");
  const header = document.querySelector(".header");

  toggleBtn.addEventListener("click", () => {
    header.classList.toggle("expandido");
  });


fetch('../js/datos-cartas.json')
.then(response => response.json())
.then(data => {
  const tbody = document.querySelector('#tabla-cartas tbody');
  data.forEach(carta => {
    const fila = `
      <tr>
        <td>${carta.vendedor}</td>
        <td>${carta.idioma}</td>
        <td>${carta.estado}</td>
        <td>${carta.departamento}</td>
        <td>${carta.barrio}</td>
        <td>${carta.precio}</td>
        <td>${carta.venta}</td>
        <td>${carta.canje}</td>
        <td>${carta.ofertas}</td>
        <td>${carta.comprar}</td>
      </tr>
    `;
    tbody.insertAdjacentHTML('beforeend', fila);
  });
})
.catch(error => console.error('Error cargando datos:', error));
});
