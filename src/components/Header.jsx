import React from "react";
import logo from '../assets/logo.png'
import userIcon from '../assets/user1.png'
import '../styles/Header.scss'


const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="CodeVideo Logo"  />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="Icono User"  />
                    <p>Perfil</p>
                </div>
                <ul>
                    <li><a href="">Cuenta</a></li>
                    <li><a href="">Cerrar Sesión</a></li>
                </ul>
            </div>
        </header>
    );
};


export { Header };