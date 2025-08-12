import React from 'react';
import CartWidget from '../CartWidget/CartWidget';

interface NavBarProps {
    logoUrl: string;
}

const NavBar: React.FC<NavBarProps> = ({ logoUrl }) => {
    return (
        <nav>
            <div>
                <img src={logoUrl} alt="Store Logo" />
            </div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <CartWidget itemCount={0} />
        </nav>
    );
};

export default NavBar;