import { useState } from 'react';
import { pizzaCart } from '../Componentes/pizzas'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const incrementQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(
        cart.map((item) =>
          item.id === id && item.count > 0
            ? { ...item, count: item.count - 1 } : item
        )
      );
    };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.count, 0);

  return (
    <div className='carrito'>
      <h3>Carrito de compras</h3>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} />
            {item.name} - ${item.price.toLocaleString()}
            <button onClick={() => decrementQuantity(item.id)}><p>-</p></button>
            {item.count}
            <button onClick={() => incrementQuantity(item.id)}><p>+</p></button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalPrice.toLocaleString()}</h3>
      <button className='total'>Total</button>
    </div>
  );
};

export default Cart;