const carrito = document.querySelector("#carrito");
const listPais = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

const cargarEventListeners = () => {
  listPais.addEventListener("click", agregarPais);

  carrito.addEventListener("click", eliminarPais);

  vaciarCarritoBtn.addEventListener("click", () => {
    articulosCarrito = [];
    limpiarHtml();
  });

  document.addEventListener("DOMContentLoaded", () => {
    articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carritoHTML();
  });
};

const agregarPais = (e) => {
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosPais(cursoSeleccionado);
  }
};

const eliminarPais = (e) => {
  if (e.target.classList.contains("borrar-curso")) {
    const paisId = e.target.getAttribute("data-id");

    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== paisId);

    carritoHTML();
  }
};

const leerDatosPais = (curso) => {
  const infoPais = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  const existe = articulosCarrito.some((curso) => curso.id === infoPais.id);
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoPais.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });

    articulosCarrito = [...cursos];
  } else {
    articulosCarrito = [...articulosCarrito, infoPais];
  }

  carritoHTML();
};

const carritoHTML = () => {
  limpiarHtml();

  articulosCarrito.forEach((curso) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${curso.imagen}" width=100></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</a></td>

        `;

    contenedorCarrito.appendChild(row);
  });

  sincronizarStorage();
};

const sincronizarStorage = () => {
  localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
};

const limpiarHtml = () => {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
};

cargarEventListeners();
