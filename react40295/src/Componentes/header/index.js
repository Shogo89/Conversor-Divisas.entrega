import React from "react";
import argentina from "../../images/paises.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={argentina} alt="logo" width="150" />
        </div>
      </Link>
      <ul>
        <li>
          <Link to="/"> Inicio</Link>
        </li>
        <li>
          <Link to="/productos"> Productos</Link>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
      </div>
    </header>
  );
};
