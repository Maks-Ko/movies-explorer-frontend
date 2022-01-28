import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css'
import account from '../../images/icon__account.svg';
import dropbtn from '../../images/icon__menu.svg';

function Navigation(props) {
    return (
        <>
            <nav className="navigation">
                <div>
                    <NavLink to="" className="navigation__button">Фильмы</NavLink>
                    <NavLink to="" className="navigation__button">Сохранённые фильмы</NavLink>
                </div>
                <NavLink to="" className="navigation__button navigation__button_account">
                    <p className="text">Аккаунт</p>
                    <div className="img-account"><img className="img" src={account} alt="аккаунт" /></div>
                </NavLink>
            </nav>
            <button className="dropbtn">&#9776;</button>
        </>
    )
}

export default Navigation;