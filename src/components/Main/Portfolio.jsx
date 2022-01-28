import './Portfolio.css'
import arrow from '../../images/text__COLOR_font-main.svg';

function Portfolio() {
    return (
        <div className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <a className="portfolio__link" href='#'>
                <p className="portfolio__link-text">Статичный сайт</p>
                <img className="portfolio__link-img" src={arrow} alt="стрелка" />
            </a>
            <a className="portfolio__link" href='#'>
                <p className="portfolio__link-text">Адаптивный сайт</p>
                <img className="portfolio__link-img" src={arrow} alt="стрелка" />
            </a>
            <a className="portfolio__link" href='#'>
                <p className="portfolio__link-text">Одностраничное приложение</p>
                <img className="portfolio__link-img" src={arrow} alt="стрелка" />
            </a>
        </div>
    )
}

export default Portfolio;