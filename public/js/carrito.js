function vaciarCarrito() {
  localStorage.removeItem("carrito");
}

function calcularTotal(products) {
  return products.reduce(
    (acum, product) => (acum += product.price * product.quantity),
    0
  );
}

let cardProducto = document.querySelector(".producto");
let productos = [];

if (localStorage.carrito) {
  carrito = JSON.parse(localStorage.carrito);

  carrito.forEach((e, index) => {
    fetch(`/api/products/${e.id}`)
      .then((res) => res.json())
      .then((product) => {
        if (product) {
          cardProducto.innerHTML += `
            <div class="container-fotoproducto">
            <img class="imagenproducto" src="${product.pathImg}"></img>
        </div>
        <div class="container-descripcion">
            <p class="nombreproductocarrito">${product.name}</p>
            <p class="preciocarrito">${product.price}</p>
            <p>cantidad: ${e.quantity} </p>
        </div>
            `;
          productos.push({ price: product.price, quantity: e.quantity });
        } else {
          carrito.splice(index, 1);
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
      })
      .then(() => {
        document.querySelector("#totalAmount").innerText = `$ ${calcularTotal(
          productos
        ).toFixed(2)}`;
      });
  });
}

let cart = document.getElementById("checkOutCarrito");

cart.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
  const formData = {
    orderItems: productos,
    metodoPago: cart.metodoPago.value,
    envio: cart.metodoEnvio.value,
    total: calcularTotal(productos),
  };
  fetch("/api/products/checkOut", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).then(r=>r.json()).then((res)=>{console.log(res);})
});
