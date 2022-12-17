import React from "react";
import argentina from "../../images/argentina.png";

export const Header = () => {
  return (
    <header>
      <a href="#">
        <div className="logo">
          <img src={argentina} alt="logo" width="150" />
        </div>
      </a>
      <ul>
        <li>
          <a href="#"> Inicio</a>
        </li>
        <li>
          <a href="#"> Productos</a>
        </li>
      </ul>
      <div className="cart">
        <box-icon name="cart"></box-icon>
        <span className="item_total">0</span>
      </div>
    </header>
  );
};
