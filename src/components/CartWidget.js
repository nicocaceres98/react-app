import React from "react";
import { useCartContext } from "./CartContext";

export const CartWidget = () => {
  const { totalProducts } = useCartContext();
  return (
    <div>
      <div className="cartIconContainer">
        <img src="https://i.imgur.com/GELbsOW.png" className="cartIcon" />
        <span className="cartIconTotal">{totalProducts() || ""}</span>
        <div id="cartIcon"></div>
      </div>
    </div>
  );
};

export default CartWidget;
