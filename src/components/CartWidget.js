const Cart = ({ children }) => {
  return (
    <div>
      <div class="cartIconContainer">
        <img src="https://i.imgur.com/GELbsOW.png" class="cartIcon" />
        <div class="cartIconTotal">10</div>
        <div id="cartIcon"></div>
        {/* <button>Add to cart</button> */}
      </div>
      {children}
    </div>
  );
};

export default Cart;
