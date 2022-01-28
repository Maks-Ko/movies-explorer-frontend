import './Footer.css';

function Footer() {
    return(
        <section className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <hr className="footer__line" />
            <div className="footer__links">
                <p className="footer__copyright">&copy; 2022</p>
                <ul className="footer__list">
                    <li className="footer__list-li"><a href="#" className="footer__link">Яндекс.Практикум</a></li>
                    <li className="footer__list-li"><a href="#" className="footer__link">Github</a></li>
                    <li className="footer__list-li"><a href="#" className="footer__link">Facebook</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Footer