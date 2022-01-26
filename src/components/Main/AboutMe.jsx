import './AboutMe.css';
import photo from '../../images/student.png';
import arrow from '../../images/text__COLOR_font-main.svg';

function AboutMe() {
    return (
        <section className="abouth-me">
            <h2 className="abouth-me__title">Студент</h2>
            <hr className="abouth-me__line" />
            <div className="profile">
                <div className="profile__description">
                    <h3 className="profile__title">Виталий</h3>
                    <p className="profile__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="profile__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по
                        веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <a className="profile__link" href='#'>Facebook</a>
                    <a className="profile__link" href='#'>Github</a>
                </div>
                <img className="profile__photo" src={photo} alt="фото моего лица" />
            </div>
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
        </section>
    )
}

export default AboutMe;