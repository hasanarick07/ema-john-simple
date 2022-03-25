import React, { useEffect, useState } from "react";
import Cart from "../cart/Cart";
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
