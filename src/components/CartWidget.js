import React from "react";

export const CartWidget = () => {
  return (
    <div>
      <div className="cartIconContainer">
        <img src="https://i.imgur.com/GELbsOW.png" className="cartIcon" />
        <div className="cartIconTotal">0</div>
        <div id="cartIcon"></div>
      </div>
    </div>
  );
};

export default CartWidget;
