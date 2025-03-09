import { useContext } from "react";
import { CartContext } from "../Context/Context";

const Cart = () => {
  const { cart, incrementQuantity, decrementQuantity, totalPrice } = useContext(CartContext);

  const handleIncrement = (id) => {
    incrementQuantity(id); 
  };

  const handleDecrement = (id) => {
    decrementQuantity(id); 
  };

  return (
    <div className="carrito">
      <h3>Carrito de compras</h3>
      {cart.length === 0 ? (
        <p>🛒 Tu carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((pizza) => (
            <li key={pizza.id} className="pizza-item">
              <img src={pizza.img || "/placeholder.jpg"} alt={pizza.name} width="100" />
              <div className="pizza-details">
                <p>{pizza.name} - ${pizza.price?.toLocaleString() || "0"}</p>
                <div className="quantity-controls">
                <button onClick={() => handleDecrement(pizza.id)}>➖</button>
                  <span>{pizza.count || 1}</span>
                  <button onClick={() => handleIncrement(pizza.id)}>➕</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice?.toLocaleString() || "0"}</h3>
      <button className="total" onClick={() => alert("Compra realizada")}>Finalizar compra</button>
    </div>
  );
};

export default Cart;
