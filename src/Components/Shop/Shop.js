import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Order from "../Order/Order";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const saved = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saved.push(addedProduct);
      }
    }
    setCart(saved);
    // console.log(storedCart);
  }, [products]);
  const add = product => {
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
    setCart(newCart);
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
        <Cart cart={cart}>
          <Link to="/Order" element={<Order></Order>}>
            <button>Proceed to Checkout</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
