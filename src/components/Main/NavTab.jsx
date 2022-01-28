import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="navtab">
            <NavLink to="/" className="navtab__link">О проекте</NavLink>
            <NavLink to="/" className="navtab__link">Технологии</NavLink>
            <NavLink to="/" className="navtab__link">Студент</NavLink>
        </nav>
    )
}

export default NavTab;