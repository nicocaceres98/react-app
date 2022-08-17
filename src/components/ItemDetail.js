import "./ItemDetail.css";
import React, { useState } from "react";
import ItemCount from "./ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../components/CartContext";

function ItemDetail({ data }) {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  };
  return (
    <div className="toparticulo">
      <div className="card">
        <img className="card-img-top" src={data.img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.desc}</p>
          <p className="card-text fs-2">{data.precio}</p>
          {goToCart ? (
            <Link to="/cart">Finalizar compra</Link>
          ) : (
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
