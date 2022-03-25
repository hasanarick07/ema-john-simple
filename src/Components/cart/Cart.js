import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div className="order">
      <h3>Order Summary</h3>
      <p>selected item : {cart.length}</p>
    </div>
  );
};

export default Cart;
