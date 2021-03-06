import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import FilterCheckbox from './FilterCheckbox';
import search from '../../images/find.svg';
import './SearchForm.css';

function SearhForm(props) {
    const [params, setParams] = useState('');
    const location = useLocation();

    useEffect(() => {
        const paramsLocal = localStorage.getItem('params')
        if (paramsLocal && location.pathname === '/movies') {
            setParams(paramsLocal);
        }
    }, [location]);

    function handleChangeParams(e) {
        setParams(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateParams({ params });
    }

    return (
        <section className="searh-form">
            <form onSubmit={handleSubmit} name="movie" id="movie" className="form__searh">
                <fieldset className="form__searh-elements">
                    <input value={params || ''} onChange={handleChangeParams} name="movie_name" id="movie_name" className="form__searh-movie" type="text" placeholder="Фильм" required />
                    <button type="submit" className="form__searh-button">
                        <img src={search} alt="поиск"></img>
                    </button>
                </fieldset>
            </form>
            <FilterCheckbox
                onChecked={props.onChecked}
                checked={props.checked} />
        </section>
    )
}

export default SearhForm;