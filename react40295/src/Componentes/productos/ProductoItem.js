import React from "react";
import IMG from "../../images/venezuela.png";

export const ProductoItem = ({
  key,
  id,
  title,
  price,
  image,
  category,
  cantidad,
}) => {
  return (
    <div className="producto">
      <a href="#">
        <div className="producto__img">
          <img src={image} alt={title} />
        </div>
      </a>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p> {category}</p>
        <p className="price">{price}</p>
      </div>
      <div className="buttom">
        <button className="btn">Añadir al carrito</button>
        <div>
          <a href="#" className="bnt">
            Vista
          </a>
        </div>
      </div>
    </div>
  );
};
