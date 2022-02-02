import React, { useState } from "react";
import PageWithForm from "../PageWithForm/PageWithForm";

function Login(props) {
    const [dataUser, setDataUser] =useState({
        email: '',
        password: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setDataUser({ ...dataUser, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password } = dataUser;
        props.onLogin({ email, password });
    }

    return (
        <>
            <PageWithForm
                title="Рады видеть!"
                textButton="Войти"
                text="Ещё не зарегистрированы?"
                link="/signup"
                linkText="Регистрация"
                onSubmit={handleSubmit}
            >
                <span htmlFor="email" className="form__text-span">E-mail</span>
                <input id="email" name="email" type="email" value={dataUser.email || ''} onChange={handleChange} className="form__text-input" placeholder="E-mail" requiredminlength="2" maxLength="40" />

                <span htmlFor="password" className="form__text-span">Пароль</span>
                <input id="password" name="password" type="password" value={dataUser.password || ''} onChange={handleChange} className="form__text-input" placeholder="Пароль" requiredminlength="7" maxLength="200" />
            </PageWithForm>
        </>
    )
}

export default Login;