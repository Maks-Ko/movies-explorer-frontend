import PageWithForm from "../PageWithForm/PageWithForm";

function Login() {
    return (
        <>
            <PageWithForm
                title="Рады видеть!"
                textButton="Войти"
                text="Ещё не зарегистрированы?"
                link="/signup"
                linkText="Регистрация"
            >
                <span for="user_name" className="form__text-span">Имя</span>
                <input id="user_name" name="user_name" type="text" className="form__text-input" placeholder="Имя" requiredminlength="2" maxLength="40" />

                <span for="password" className="form__text-span">Пароль</span>
                <input id="password" name="password" type="password" className="form__text-input" placeholder="Пароль" requiredminlength="7" maxLength="200" />
            </PageWithForm>
        </>
    )
}

export default Login;