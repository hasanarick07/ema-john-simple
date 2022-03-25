import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
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
  useEffect(() => {
    const storedCart = getStoredCart();
    const saved = [];
    for (const id in storedCart) {
      const addedproduct = products.find(product => product.id === id);
      if (addedproduct) {
        const quantity = storedCart[id];
        addedproduct.quantity = quantity;
        saved.push(addedproduct);
      }
    }
    setcart(saved);
    // console.log(storedCart);
  }, [products]);
  const add = product => {
    const add = [...cart, product];
    let newCart = [];
    const exists = cart.find(oldProduct => oldProduct.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(oldProduct => oldProduct.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setcart(newCart);
    addToDb(product.id);
    // console.log(product);
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
