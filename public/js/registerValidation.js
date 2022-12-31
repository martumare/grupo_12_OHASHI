window.onload = function () {
    let form = document.querySelector("form.register");

    form.addEventListener("submit", (evento) => {
        let errores = [];
        let name = document.querySelector(".usuario nameRegister");
        let lastName = document.querySelector(".usuario lastnameRegister");
        let email = document.querySelector(".usuario emailRegister");
        let password = document.querySelector(".usuario passwordRegister");
        let address = document.querySelector(".address");
        let numero = document.querySelector(".numero");
        let phone = document.querySelector(".usuario phoneRegister");
        let image = document.querySelector("#image");

        var imagePath = image.value;
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;

        expresion = /\w+@\w+\.+[a-z]/;

        if (name.value == "") {
            errores.push("Nombre no puede estar vacio");
        } else if (name.value.length < 2) {
            errores.push("Nombre debe tener al menos 2 caracteres");
        }

        if (lastName.value == "") {
            errores.push("Apellido no puede estar vacio");
        } else if (lastName.value.length < 2) {
            errores.push("Apellido debe tener al menos 2 caracteres");
        }

        if (email.value == "") {
            errores.push("E-mail no puede estar vacio");
        } else if (!expresion.test(email)) {
            errores.push("Formato de E-mail no valido");
        }

        if (password.value == "") {
            errores.push("Password no puede estar vacio");
        } else if (password.value.length < 8) {
            errores.push("Password debe tener al menos 2 caracteres");
        }

        if (address.value == "") {
            errores.push("Direccion no puede estar vacio");
        } 

        if (numero.value == "") {
            errores.push("Numero no puede estar vacio");
        } 

        if (phone.value == "") {
            errores.push("Numero de telefono no puede estar vacio");
        } else if (isNaN(phone)) {
            errores.push("Formato de Numero de telefono no valido");
        }

        if (!allowedExtensions.exec(imagePath)) {
            errores.push("Por favor cargar archivo con extension jpeg/.jpg/.png/.gif");
        } 

        if (errores.length > 0) {
            evento.preventDefault();

            let ulErrores = document.querySelector("div.erroresRegister ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    });


}
