import photo from '../../images/student.jpg';
import './AboutMe.css';

function AboutMe() {
    return (
        <section id="abouth-me" className="abouth-me">
            <h2 className="abouth-me__title">Студент</h2>
            <hr className="abouth-me__line" />
            <div className="profile">
                <div className="profile__description">
                    <h3 className="profile__title">Максим</h3>
                    <p className="profile__profession">Фронтенд-разработчик, 36 лет</p>
                    <p className="profile__text">Я родился и живу в Челябинск, закончил факультет менеджмента в УрСЭИ. У меня есть жена
                        и двое детей. Я люблю слушать музыку, гулять всей семьёй. Недавно начал кодить.
                        С 2016 года работал в компании «Спецрегион». После того, как прошёл курс по
                        веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <ul className="profile__list-links">
                        <li><a href="https://www.facebook.com" target="_blank" className="profile__link">Facebook</a></li>
                        <li><a href="https://github.com/Maks-Ko" target="_blank" className="profile__link">Github</a></li>
                    </ul>
                </div>
                <img className="profile__photo" src={photo} alt="фото моего лица" />
            </div>            
        </section>
    )
}

export default AboutMe;