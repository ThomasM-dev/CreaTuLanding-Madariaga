import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // iconos de FontAwesome
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'; // icono de carrito de compras
import '../css/style.css';

const CartWidget = () => {
  return (
    <div className='cart'>
      <FontAwesomeIcon icon={faCartShopping} /> <span>0</span>
    </div>
  );
};

export default CartWidget;
