import './Footer.css';

function Footer() {
    return(
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <hr className="footer__line" />
            <div className="footer__links">
                <p className="footer__copyright">&copy; 2022</p>
                <ul className="footer__list">
                    <li className="footer__list-li"><a href="https://practicum.yandex.ru/" target="_blank" className="footer__link">Яндекс.Практикум</a></li>
                    <li className="footer__list-li"><a href="https://github.com/Maks-Ko" target="_blank" className="footer__link">Github</a></li>
                    <li className="footer__list-li"><a href="https://www.facebook.com" target="_blank" className="footer__link">Facebook</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer