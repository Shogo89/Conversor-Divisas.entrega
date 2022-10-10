class Item {
  pais;
  ciudad;
  id;
  cantidad;
  constructor(id, pais, ciudad, cantidad) {
    this.id = id;
    this.pais = pais;
    this.ciudad = ciudad;
    this.cantidad = cantidad;
  }
}
function seleccionaUnPais() {
  let pais = new Item();
  pais.id = prompt("desea enviar dolar o euro?");
  pais.pais = prompt(" a que pais desea enviar el dinero?");
  pais.ciudad = prompt("a que ciudad?");
  pais.cantidad = prompt("cuanto dinero?");

  return pais;
}

function seleccionaPais(carrito) {
  let pais;
  let seguir;
  do {
    pais = seleccionaUnPais();
    carrito.push(pais);
    seguir = prompt("desea  enviar mas remesas? si/no");
  } while (seguir == "si");
}

function mostrarCarrito(carrito) {
  for (let pais of carrito) {
    console.log(
      "nombre: " +
        pais.pais +
        "\n" +
        "ciudad: " +
        pais.ciudad +
        "\n" +
        "cantidad: " +
        pais.cantidad +
        "\n"
    );
  }
}

const carrito = [];
seleccionaPais(carrito);
console.log(carrito);
mostrarCarrito(carrito);
