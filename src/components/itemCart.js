import React from "react";
import { useCartContext } from "./CartContext";
import "./itemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="itemCart">
      <img src={product.img} alt={product.title} />
      <div>
        <p>Titulo: {product.title} </p>
        <p>Cantidad: {product.quantity} </p>
        <p>Precio: ${product.precio} </p>
        <p>SubTotal: ${product.quantity * product.precio} </p>
        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ItemCart;
