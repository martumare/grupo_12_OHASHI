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
            

        
    })


}