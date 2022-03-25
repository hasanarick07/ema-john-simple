import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
      <div onClick={() => add(product)} className="cart">
        <p>
          Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </p>
      </div>
    </div>
  );
};

export default Product;
