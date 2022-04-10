import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = products => {
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
  return [cart, setCart];
};
export default useCart;
