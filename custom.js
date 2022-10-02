let nombre_y_apellido = prompt("ingresar nombre y apellido");
let conversordivisa = prompt("quieres cambiar dolares o euros?");
if (nombre_y_apellido != "" && conversordivisa != "") {
  alert(
    "Nombre y apellido:" +
      " " +
      nombre_y_apellido +
      " " +
      ",usted va a convertir" +
      " " +
      conversordivisa
  );
} else {
  alert("No ingreso nombre y apellido o pregunta");
}

function remesas() {
  let cantidad = parseInt(document.getElementById("valor").value);
  let total = 0;
  let dolar = 300;
  let euro = 301;
  if (document.getElementById("one").checked) {
    total = cantidad * dolar;
    alert("el total de pesos por tus dolares es : $" + total);
  }
  if (document.getElementById("two").checked) {
    total = cantidad * euro;
    alert("el total de pesos por tus euros es : €" + total);
  } else {
    alert("por favor coloca la cantidad y selecciona tu moneda");
  }
}
