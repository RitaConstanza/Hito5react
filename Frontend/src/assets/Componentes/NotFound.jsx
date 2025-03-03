import { Link } from 'react-router-dom'
import React from 'react';
import imagen from '../img/NotFound.jpg'
import './NotFound.css';  


const NotFound = () => {
  return (
    <div>
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <div className='not-found-container'>
      <img className='not-found-img' src= {imagen} alt="Notfound" />
      <Link to="/"><button className='not-found-btn'>Volver al inicio</button></Link>
      </div>
    </div>


  );
};
export default NotFound;