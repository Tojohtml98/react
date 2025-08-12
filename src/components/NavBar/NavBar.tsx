import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

interface NavBarProps {
  logoUrl: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoUrl }) => (
  <nav>
    <img src={logoUrl} alt="Logo" style={{ height: 40 }} />
    <a href="#">Inicio</a>
    <a href="#">Productos</a>
    <a href="#">Contacto</a>
    <CartWidget />
  </nav>
);

export default NavBar;