import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header__navigation">
                <img src={logo} alt="логотип" className="header__logo" />
                <div className="header__nav-button">
                    <button className="header__button">Регистрация</button>
                    <button className="header__button">Войти</button>
                </div>
            </div>
            <div className="header__prelude">
                <h1 className="header__title">Учебный проект студента факультета Веб-разработки.</h1>
            </div>
        </header>
    )
}

export default Header;