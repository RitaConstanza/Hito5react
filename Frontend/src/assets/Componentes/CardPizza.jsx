import { useState, useContext } from "react";
import { CartContext } from "../Context/Context";

const CardPizza = ({ id, name, price, ingredients = [], img, desc }) => {
  const [showDesc, setShowDesc] = useState(false);
  const { cart, addProduct, incrementQuantity, decrementQuantity } = useContext(CartContext);

  const pizzaInCart = cart.find((pizza) => pizza.id === id);

  const handleAddToCart = () => {
    if (!pizzaInCart) {
      addProduct({ id, name, price, ingredients, img, desc });
    } else {
      incrementQuantity(id);
    }
  };
  const handleRemoveFromCart = () => {
    decrementQuantity(id);
  };

  return (
    <div className="card">
      <div className="pizza-card">
        <img src={img} alt={name} className="pizza-img" />
        <div className="pizza-info">
          <h3>{name}</h3>
          <p><strong>Ingredientes:</strong></p>
          <ul className="ingredientes">
            {ingredients && ingredients.length > 0 ? (
              ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))
            ) : (
              <li>No hay ingredientes disponibles</li>
            )}
          </ul>
          <p><strong>Precio: ${price}</strong></p>
          <button className="button" onClick={() => setShowDesc(!showDesc)}>
            {showDesc ? "Ocultar descripción" : "Ver más 👀"}
          </button>
          {showDesc && <p className="descripcion">{desc}</p>}
          <button className="button" onClick={handleAddToCart}>
            Añadir 🛒
          </button>
          {pizzaInCart && (
            <div>
              <button className="button" onClick={handleRemoveFromCart}>
                Eliminar 🍕
              </button>
              <p>Cantidad: {pizzaInCart.count}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardPizza;

