import React from "react";
import { Header } from "./Componentes/header";
import { ProductosLista } from "./Componentes/productos/index";
import "boxicons";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductosLista />
    </div>
  );
}

export default App;
