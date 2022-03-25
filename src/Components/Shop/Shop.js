import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setcart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  const add = product => {
    const add = [...cart, product];
    setcart(add);
  };
  return (
    <div className="shop">
      <div className="product-container">
        {products.map(product => (
          <Product key={product.id} product={product} add={add}></Product>
        ))}
      </div>
      <div className="order-container">
        <h1>Order Summary</h1>
        <h2>selected item : {cart.length}</h2>
      </div>
    </div>
  );
};

export default Shop;
