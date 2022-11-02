import React from 'react';
import CardWidget from './CardWidget';
import './navbar.css';

function NavBar() {
    return (
        <nav><ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Quiénes somos</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#"><CardWidget/></a></li>
        </ul></nav>
    )
}

export default NavBar;