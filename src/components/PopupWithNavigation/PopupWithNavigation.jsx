import React from 'react';
import { NavLink } from 'react-router-dom';
import './PopupWithNavigation.css'
import account from '../../images/icon__account.svg'
import clouse from '../../images/clouse.svg'

function PopupWithNavigation(props) {
    return (
        <div className={`popup ${props.isOpen}`}>
            <button className="popup__button">
                <img src={clouse} alt="крестик, закрыть" />
            </button>
            <nav className="popup__nav">
                <div className="popup__container">
                    <NavLink exact to="/" activeClassName="popup__link_active" className="popup__link">Главная</NavLink>
                    <NavLink exact to="/movies" activeClassName="popup__link_active" className="popup__link">Фильмы</NavLink>
                    <NavLink to="/saved-movies" activeClassName="popup__link_active" className="popup__link">Сохранённые фильмы</NavLink>
                </div>
                <NavLink to="/profile" activeClassName="popup__link_active" className="popup__link-account">
                    <p className="popup__link-text">Аккаунт</p>
                    <div className="popup__link-img"><img className="img" src={account} alt="аккаунт" /></div>
                </NavLink>
            </nav>

        </div>
    )
}

export default PopupWithNavigation;