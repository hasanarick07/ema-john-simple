import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import Inventory from "../Inventory/Inventory";
import ReviewItem from "../ReviewItem/ReviewItem";

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const deleteCart = cartt => {
    const rest = cart.filter(found => found.id !== cartt.id);
    setCart(rest);
    removeFromDb(cartt.id);
  };
  return (
    <div className="shop">
      <div>
        {cart.map(cartt => (
          <ReviewItem
            key={cartt.id}
            cart={cartt}
            deleteCart={deleteCart}
          ></ReviewItem>
        ))}
      </div>
      <div className="order-container">
        <Cart cart={cart}>
          <Link to="/Inventory" element={<Inventory></Inventory>}>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
