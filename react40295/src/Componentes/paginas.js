import React from "react";
import { Switch, Route } from "react-router-dom";
import { Inicio } from "./inicio";
import { ProductosLista } from "./productos/index";

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductosLista} />
      </Switch>
    </section>
  );
};
