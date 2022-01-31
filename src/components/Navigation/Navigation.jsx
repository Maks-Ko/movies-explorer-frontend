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
                    <NavLink exact to="/movies" activeClassName="navigation__link_active" className="navigation__link">Фильмы</NavLink>
                    <NavLink to="/saved-movies" activeClassName="navigation__link_active" className="navigation__link">Сохранённые фильмы</NavLink>
                </div>
                <NavLink to="/profile" activeClassName="navigation__link_active" className="navigation__link navigation__link_account">
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