let botonComprar = document.querySelector(".agregar-carrito");

botonComprar.addEventListener("click", (e) => {
  if (localStorage.carrito) {
    let carrito = JSON.parse(localStorage.carrito);

    let index = carrito.findIndex((prod) => {
     return prod.id == e.target.dataset.id;
    });

    if (index != -1) {
      carrito[index].quantity++;
    } else {
      carrito.push({ id: e.target.dataset.id, quantity: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
  } else {
    localStorage.setItem(
      "carrito",
      JSON.stringify([{ id: e.target.dataset.id, quantity: 1 }])
    );
  }

  toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  toastr.success("Se agrego el producto al carrito");
});


