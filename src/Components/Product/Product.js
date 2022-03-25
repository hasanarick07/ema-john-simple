import React from "react";
import "./Product.css";

const Product = props => {
  const { add, product } = props;
  const { name, seller, img, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-details">
        <p>{name}</p>
        <p>${price}</p>
        <p>Seller: {seller}</p>
        <p>{ratings}Star</p>
      </div>
      <div className="cart">
        <p onClick={() => add(product)}>Add to Cart</p>
      </div>
    </div>
  );
};

export default Product;
