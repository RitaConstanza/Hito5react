import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const { cart, addProduct, incrementQuantity } = useContext(CartContext);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!res.ok) {
          throw new Error("Pizza no encontrada");
        }
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getPizza();
    }
  }, [id]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>{error}</p>;
  if (!pizza) return <p>No se encontró la pizza.</p>;

  const pizzaInCart = cart.find((p) => p.id === pizza.id);

  const handleAddToCart = () => {
    if (!pizzaInCart) {
      addProduct(pizza);
    } else {
      incrementQuantity(pizza.id);
    }
  };

  return (
    <div className="pizza-grid">
      <div className="pizza-tarjeta">
        <img
          src={pizza.img || "/placeholder.jpg"}
          alt={pizza.name}
          className="pizza-img"
        />
        <div className="pizza-info">
          <h3>{pizza.name}</h3>
          <h4><strong>Ingredientes:</strong></h4>
          <p>{pizza.desc}</p>
          <ul className="ingredientes">
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p><strong>Precio: ${pizza.price}</strong></p>
          <button className="button" onClick={handleAddToCart}>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;

