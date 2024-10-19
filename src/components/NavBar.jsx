import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer'; // Importa ItemListContainer
import '../css/style.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Contenedor para el logo y nombre de la tienda */}
      <div className="navbar-left">
        <img src="/image/logo_tienda.jpeg"  className="logo" />
        <div className="nametienda">EcoTrendy</div>
      </div>

      {/* Menú de navegación y carrito juntos a la derecha */}
      <div className="navbar-right">
        <ul>
          <li><a href="">Ropa Sostenible</a></li>
          <li><a href="">Cosméticos Naturales</a></li>
          <li><a href="">Alimentos Orgánicos</a></li>
        </ul>
        {/* carrito */}
        <div>
          <ItemListContainer />
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

