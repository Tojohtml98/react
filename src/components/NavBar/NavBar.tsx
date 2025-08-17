import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

interface NavBarProps {
  logoUrl: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoUrl }) => (
  <nav>
    <img src={logoUrl} alt="Logo" style={{ height: 40 }} />
    <a href="/">Inicio</a>
    <a href="/category/A">Categoría A</a>
    <a href="/category/B">Categoría B</a>
    <CartWidget itemCount={0} />
  </nav>
);

export default NavBar;