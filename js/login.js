function validarInput(input) {
    const mensajeEmail = document.getElementById("mensaje-email")
    if (input.length < 8){
        mensajeEmail.innerText = "El texto ingresado es muy corto"
        return false;
    }
    if (input.length > 10){
        console.log('El texto ingresado es muy largo.');
        return false;
    }
    return true
}

document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("email");
    const passInput = document.getElementById("password");
    const enviar = document.getElementById("enviar")
    const limpiar = document.getElementById("limpiar")
    if (userInput && passInput && enviar && limpiar) {
        enviar.addEventListener("click", (e) => {
            e.preventDefault()
            validarInput(userInput.value)
        })
    }
})
