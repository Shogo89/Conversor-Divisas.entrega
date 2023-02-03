import React from "react";
import { Header } from "./Componentes/header";
import "boxicons";
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./Componentes/paginas";
import { Dataprovider } from "./context/Dataprovider";

function App() {
  return (
    <Dataprovider>
      <div className="App">
        <Router>
          <Header />
          <Paginas></Paginas>
        </Router>
      </div>
    </Dataprovider>
  );
}

export default App;
