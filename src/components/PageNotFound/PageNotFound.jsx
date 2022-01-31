import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return(
        <div className="not-found">
            <p className="not-found__number">404</p>
            <h2 className="not-found__title">Страница не найдена</h2>
            <Link to="" className="not-found__link">Назад</Link>
        </div>
    )
}

export default PageNotFound;