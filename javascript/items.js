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
    this.fecha = new Date();
  }
}

function showCart(x) {
  document.getElementById("products-id").style.display = "block";
}
function closeBtn() {
  document.getElementById("products-id").style.display = "none";
}
