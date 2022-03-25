import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  const add = product => {
    console.log(product);
  };
  return (
    <div className="shop">
      <div className="product-container">
        {products.map(product => (
          <Product key={product.id} product={product} add={add}></Product>
        ))}
      </div>
      <div className="order-container">
        <h1>this is order</h1>
      </div>
    </div>
  );
};

export default Shop;
