import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './PageWithForm.css'

function PageWithForm(props) {
    return (
        <div className="page-form">
            <Link to="/">
                <img src={logo} alt="логотип" className="page-form__logo" />
            </Link>
            <h1 className="page-form__title">{props.title}</h1>
            <form name="register" className="form" onSubmit={props.onSubmit}>
                <fieldset className="form__container">
                    {props.children}
                    <div className="form__block-errors_button">
                    {props.errRespons && <span className="form__text-error form__text-error_button">{`${props.errRespons}` === 'Ошибка: 409' ? 'Пользователь с таким email уже существует' : 'Что-то пошло не так, попробуйте по позже' }</span>}
                    <button type="submit" disabled={props.isSubmitDisabled} className={`form__button ${props.isbuttonDisabled}`}>{props.textButton}</button>
                    </div>
                </fieldset>
            </form>
            <p className="page-form__text">{props.text} <Link to={props.link} className="page-form__linl">{props.linkText}</Link></p>
        </div>
    )
}

export default PageWithForm;