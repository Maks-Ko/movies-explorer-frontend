import Header from '../Header/Header';
import './Profile.css'

function Profile(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn} />
            <main className="account">
                <h2 className="account__title">Привет, Виталий!</h2>
                <form name="account" className="form__account" onSubmit={props}>
                    <fieldset className="form__account-container">
                        <span className="form__account-span">Имя
                            <input name="user_name" value="Виталий" id="user_name" className="form__account-text" type="text" placeholder="Введите имя" requiredminlength="2" maxLength="40" />
                        </span>
                        {/* <span id="user_name-error" className="form__input-error"></span> */}
                        <hr className="form__account-line" />
                        <span className="form__account-span">E-mail
                            <input name="email" value="pochta@yandex.ru" id="email" className="form__account-text" type="email" placeholder="Введите E-mail" />
                        </span>
                        {/* <span id="email-error" className="form__input-error"></span> */}
                        <button type="submit" className="form__account-button">Редактировать</button>
                    </fieldset>
                </form>
                <button className="account__button">Выйти из аккаунта</button>
            </main>
        </>
    )
}

export default Profile;