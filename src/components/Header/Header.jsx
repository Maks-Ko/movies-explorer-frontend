import logo from '../../images/logo.svg';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="логотип" className="header__logo" />
            <div className="header__navigation">
                <button className="header__button">Регистрация</button>
                <button className="header__button">Войти</button>
            </div>
        </header>
    )
}

export default Header;