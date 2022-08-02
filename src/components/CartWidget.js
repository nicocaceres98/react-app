const Cart = ({ children }) => {
  return (
    <div>
      <div className="cartIconContainer">
        <img src="https://i.imgur.com/GELbsOW.png" className="cartIcon" />
        <div className="cartIconTotal">10</div>
        <div id="cartIcon"></div>
        {/* <button>Add to cart</button> */}
      </div>
      {children}
    </div>
  );
};

export default Cart;
