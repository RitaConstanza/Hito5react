import { createContext, useState, useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { token } = useContext(UserContext);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const IsDisabled = !token;

  // Actualiza el total cada vez que cambia el carrito
  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);
    setTotalPrice(total);
  }, [cart]);

  const addProduct = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find(item => item.id === product.id);
      if (exists) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prevCart, { ...product, count: 1 }];
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
      // Decrementa la cantidad del producto
      const updatedCart = prevCart.map(item =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      // Filtra y elimina los productos cuyo count sea 0 o menor
      return updatedCart.filter(item => item.count > 0);
    });
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, incrementQuantity, decrementQuantity, totalPrice, setCart, token, IsDisabled }}>
      {children}
    </CartContext.Provider>
  );
};
