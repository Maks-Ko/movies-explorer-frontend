import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="navtab">
            <HashLink to="#project" className="navtab__link">О проекте</HashLink>
            <HashLink to="#techs" className="navtab__link">Технологии</HashLink>
            <HashLink to="#abouth-me" className="navtab__link">Студент</HashLink>
        </nav>
    )
}

export default NavTab;