import React from "react";
import "./Cart.css";

const Cart = props => {
  const { cart, children } = props;
  // console.log(cart);
  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    price = price + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
    quantity = quantity + product.quantity;
  }
  const tax = +(price * 0.1).toFixed(2);
  const total = price + shipping + tax;
  //   console.log(cart);
  return (
    <div className="order">
      <h3>Order Summary</h3>
      <p>Selected item : {quantity}</p>
      <p>Total Price : ${price}</p>
      <p>Total Shipping : ${shipping}</p>
      <p>Tax : ${tax}</p>
      <h4>Grand Total : $ {total} </h4>
      {children}
    </div>
  );
};

export default Cart;
