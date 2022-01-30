import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'
import account from '../../images/icon__account.svg';
import menu from '../../images/icon-main.svg';

function Navigation(props) {
    return (
        <>
            <nav className="navigation">
                <div>
                    <NavLink exact to="/movies" className="navigation__button">Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="navigation__button">Сохранённые фильмы</NavLink>
                </div>
                <NavLink to="/profile" className="navigation__button navigation__button_account">
                    <p className="text">Аккаунт</p>
                    <div className="img-account"><img className="img" src={account} alt="аккаунт" /></div>
                </NavLink>
            </nav>
            <button className="dropbtn">
                <img src={menu} alt="меню" />
            </button>
        </>
    )
}

export default Navigation;