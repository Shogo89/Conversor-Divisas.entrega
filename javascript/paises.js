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

/**function mostrarCarrito(carrito) { 
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
        "\n" +
        "fecha" +
        pais.fecha +
        "\n"
    );
  }
}
*/
/*function buscarElemento(id) {
  let elemento = carrito.find((pais) => {
    return pais.id == id;
  });
  return elemento;
}

const carrito = [];
seleccionaPais(carrito);
console.log(carrito);
mostrarCarrito(carrito);
let resultado = buscarElemento(carrito, 2); */

let allContainerCart = document.querySelector(".products");
let RemesasPais = document.querySelector(".card-items");

let buyThings = [];

loadEventListeners();
function loadEventListeners() {
  allContainerCart.addEventListener("click", addProduct);
  RemesasPais.addEventListener("click", deleteProduct);
}

function addProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains("btn-add-cart")) {
    const selectProduct = e.target.parentElement;
    readTheContent(selectProduct);
  }
}
function deleteProduct(e) {
  if (e.target.classList.contains("delete-product")) {
    const deleteId = e.target.getAttribute("data id");
    buyThings = buyThings.filter((product) => product.id !== deleteId);
  }
}

function readTheContent(product) {
  const infoProduct = {
    image: product.querySelector("div img").src,
    title: product.querySelector(".title").textContent,
    id: product.querySelector("a").getAttribute("data-id"),
    amount: 1,
  };

  buyThings = [...buyThings, infoProduct];
  loadHtml();
  console.log(infoProduct);
}

function loadHtml() {
  buyThings.forEach((product) => {
    const { image, title, amount, id } = product;
    const row = document.createElement("div");
    row.classList.add("item");
    row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h6>Amount: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

    RemesasPais.appendChild(row);
  });
}

function clearHtml() {
  RemesasPais.innerHTML = "";
}
