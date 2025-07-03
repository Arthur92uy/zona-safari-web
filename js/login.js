function validarEmail(input, minimo, maximo) {
    const mensajeEmail = document.getElementById("mensaje-email")  
    const mail = input.value.trim().toLowerCase() 
    if (mail.length < minimo){
        mensajeEmail.innerText = `El correo electrónico ingresado contiene menos de ${minimo} caracteres.`
        return false;
    }
    if (mail.length > maximo){
        mensajeEmail.innerText = `El correo electrónico ingresado contiene más de ${maximo} caracteres.`
        return false;
    }
    if (!mail.includes("@") || !mail.includes(".")) {
        mensajeEmail.innerText = `El correo electrónico ingresado no posée un formato válido que incluya un "@" y un punto.`
        return false;
    }
    mensajeEmail.innerText = ""
    return true
}

function validarPassword(input, minimo, maximo) {
    const mensajePass = document.getElementById("mensaje-password")
    const pass = input.value.trim() 
        if (pass.length < minimo){
        mensajePass.innerText = `La constraseña ingresada contiene menos de ${minimo} caracteres.`
        return false;
        }
        if (pass.length > maximo){
        mensajePass.innerText = `La contraseña ingresada contiene más de ${maximo} caracteres.`
        return false;
        }
    mensajePass.innerText = ""
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
            if((validarEmail(userInput, 7, 50)) && (validarPassword(passInput, 8, 16))){
                    alert(`Vamos a validar el usuario`)
            }
        })
    }
})

document.addEventListener("DOMContentLoaded", function () {
    const tituloLogin = document.getElementById("titulo-login")
    const iniciarSesion = document.querySelector(".iniciar-sesion")
    const login = document.getElementsByName("login")
    const registrarse = document.querySelector(".registrarse")
    const singUp = document.getElementsByName("sing-up")
    const iniciarSesionA = document.querySelector(".iniciar-sesion-a")
    const registrarseA = document.querySelector(".registrarse-a")
    if (tituloLogin && login && singUp && iniciarSesion && registrarse && iniciarSesionA && registrarseA){
        registrarseA.addEventListener("click", () => {
            tituloLogin.innerText = "Bienvenido entrenador!"
            iniciarSesion.classList.replace("inactive", "active")
            login[0].classList.replace("active","inactive")
            singUp[0].classList.replace("inactive", "active")
            registrarse.classList.replace("active","inactive")
        })
        iniciarSesionA.addEventListener("click", () => {
            tituloLogin.innerText = "Hola otra vez entrenador!"
            iniciarSesion.classList.replace("active", "inactive")
            login[0].classList.replace("inactive","active")
            singUp[0].classList.replace("active", "inactive")
            registrarse.classList.replace("inactive","active")
        })
    }
});