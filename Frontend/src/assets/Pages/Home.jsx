import { useState, useEffect } from 'react';
import CardPizza from '../Componentes/CardPizza';
import Header from '../Componentes/Header';

const Home = () => {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      const res = await fetch('http://localhost:5000/api/pizzas')
      const data = await res.json()
      setPizzas(data)
    }
    getPizzas()
  }, []);

  
  return (
    <>
    <Header/>
    <div className="pizzas">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          img={pizza.img}
          description={pizza.desc}
          />
       )) }
    </div>
    </>
  );
};

export default Home;