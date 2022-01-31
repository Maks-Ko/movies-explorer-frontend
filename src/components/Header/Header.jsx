import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation'
import './Header.css';

function Header(props) {
    return (
        <header className={`header ${props.loggedIn ? "header__background" : ""}`}>
            <Link to="/">
                <img src={logo} alt="логотип" className="header__logo" />
            </Link>
            {props.loggedIn ?
                <Navigation /> :
                <nav className="header__navigation">
                    <Link to="/signup" className="header__link">Регистрация</Link>
                    <Link to="/signin" className="header__link">Войти</Link>
                </nav>
            }

        </header>
    )
}

export default Header;