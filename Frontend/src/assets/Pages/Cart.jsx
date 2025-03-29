import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { token } = useContext(UserContext);
  
  const { cart, incrementQuantity, decrementQuantity, totalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleFinalizarCompra = () => {
    if (!token) {
      navigate("/login");
    } else {
      alert("Compra realizada");
    }
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
                <p>{pizza.name} - ${pizza.price?.toLocaleString("de-DE") || "0"}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(pizza.id)}>➖</button>
                  <span>{pizza.count}</span>
                  <button onClick={() => incrementQuantity(pizza.id)}>➕</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice?.toLocaleString("de-DE") || "0"}</h3>
      <button
        className="total"
        onClick={handleFinalizarCompra}
        disabled={!token}
      >
        Finalizar compra
      </button>
      {!token && <p style={{ color: "red" }}>🔒 Debes iniciar sesión para comprar.</p>}
    </div>
  );
};

export default Cart;
