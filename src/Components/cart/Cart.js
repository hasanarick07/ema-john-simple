import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let price = 0;
  let shipping = 0;
  for (const product of cart) {
    price = price + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = (price * 0.1).toFixed(2);
  console.log(cart);
  return (
    <div className="order">
      <h3>Order Summary</h3>
      <p>Selected item : {cart.length}</p>
      <p>Total Price : ${price}</p>
      <p>Total Shipping : ${shipping}</p>
      <p>Tax : ${tax}</p>
      <h4>Grand Total : </h4>
    </div>
  );
};

export default Cart;
