import { useContext } from 'react';
import CardPizza from '../Componentes/CardPizza';
import Header from '../Componentes/Header';
import { PizzaContext } from '../Context/PizzaContext';

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  if (!pizzas) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <Header />
      <div className="pizzas">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </>
  );
};

export default Home;

