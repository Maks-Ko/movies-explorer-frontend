import PageWithForm from '../PageWithForm/PageWithForm';
import './Register.css'

function Register() {
    return (
        <>
            <PageWithForm
                title="Добро пожаловать!"
                textButton="Зарегистрироваться"
                text="Уже зарегистрированы?"
                link="/signin"
                linkText="Войти"
            >
                <span for="user_name" className="form__text-span">Имя</span>
                <input id="user_name" name="user_name" type="text" className="form__text-input" placeholder="Имя" requiredminlength="2" maxLength="40" />

                <span for="email" className="form__text-span">E-mail</span>
                <input id="email" name="email" type="email" className="form__text-input" placeholder="E-mail" requiredminlength="2" maxLength="40" />

                <span for="password" className="form__text-span">Пароль</span>
                <input id="password" name="password" type="password" className="form__text-input" placeholder="Имя" requiredminlength="2" maxLength="20" />
            </PageWithForm>
        </>
    )
}

export default Register;