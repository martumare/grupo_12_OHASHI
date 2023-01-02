window.onload = function () {

    let form = document.querySelector("form.login");

    form.addEventListener("submit", (evento) => {
        let errores = [];
        let email = document.querySelector(".usuario emailLogin");
        let password = document.querySelector(".usuario passwordLogin");

        expresion = /\w+@\w+\.+[a-z]/;

        
        if (email.value == "") {
            errores.push("E-mail no puede estar vacio");
        } else if (!expresion.test(email)) {
            errores.push("Formato de E-mail no valido");
        }

        if (password.value == "") {
            errores.push("Password no puede estar vacio");
        } else if (password.value.length < 8) {
            errores.push("Password debe tener al menos 8 caracteres");
        }

        if (errores.length > 0) {
            evento.preventDefault();

            let ulErrores = document.querySelector("div.erroresLogin ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    });


}