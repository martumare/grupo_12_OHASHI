window.onload = function () {

    let form = document.querySelector("form.create");

    form.addEventListener("submit", (evento) => {
        let errores = [];
        let name = document.getElementsByClassName("input-nombre");
        let description = document.getElementById("description");
        let price = document.getElementsByClassName("input-precio");
        let image = document.getElementById("image");

        var imagePath = image.value;
        var allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
        
        if (name.value == "") {
            errores.push("Nombre no puede estar vacio");
        } else if (name.value.length < 5) {
            errores.push("Nombre debe tener al menos 5 caracteres");
        }

        if (description.value == "") {
            errores.push("Descripcion no puede estar vacio");
        } else if (description.value.length < 20) {
            errores.push("Descripcion debe tener al menos 20 caracteres");
        }

        if (price.value == "") {
            errores.push("Precio no puede estar vacio");
        }

        if (!allowedExtensions.exec(imagePath)) {
            errores.push("Por favor cargar archivo con extension jpeg/.jpg/.png/.gif");
        } 

        if (errores.length > 0) {
            evento.preventDefault();

            let ulErrores = document.querySelector("div.erroresCreate ul");
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
            }
        }

    });
}