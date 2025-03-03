import { useEffect, useState } from "react";
  
  const ListadoPizzas = () => {
    const [pizza, setPizza] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const getPizzas = async () => {
        try {
          const res = await fetch("http://localhost:5000/api/pizzas/p001");
          const data = await res.json();
          setPizza(data); 
        } catch (error) {
          console.error("Error fetching pizzas:", error);
        } finally {
          setLoading(false);
        }
      };
      getPizzas();
    }, []);
  
    if (loading) return <p>Cargando pizzas</p>;

  return (
    <div className="pizza-grid">
    <div className="pizza-tarjeta">
      <img src={pizza.img} alt={pizza.name} className="pizza-img" />
      
      <div className="pizza-info">
        <h3>{pizza.name}</h3>
        <h4><strong>Ingredientes:</strong></h4>
        <p>{pizza.desc}</p>
        <ul className="ingredientes">
          {pizza.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
        <p><strong>Precio: ${pizza.price}</strong></p>
        <button className="button">Añadir 🛒</button>
      </div>
    </div>
  </div>
)}
  
export default ListadoPizzas;
