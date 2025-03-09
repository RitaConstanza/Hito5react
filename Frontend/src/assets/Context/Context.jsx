import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, count: 1 }];
      }
    });
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart
        .map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
        .filter(item => item.count > 0);
    });
  };  

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  const globalState = {
    cart,
    addProduct,
    incrementQuantity,
    decrementQuantity,
    totalPrice,
  };

  return (
    <CartContext.Provider value={globalState}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
