import './AboutProject.css';

function AboutProject() {
    return (
        <section id="project" className="project">
            <h2 className="project__title">О проекте</h2>
            <hr className="project__line" />
            <div className="description">
                <h3 className="description__title">Дипломный проект включал 5 этапов</h3>
                <p className="description__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                <h3 className="description__title">На выполнение диплома ушло 5 недель</h3>
                <p className="description__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
            <div className="tracker">
                <p className="tracker__text tracker__text_color_white">1 неделя</p>
                <p className="tracker__text">Back-end</p>
                <p className="tracker__text tracker__text_color_black">4 недели</p>
                <p className="tracker__text">Front-end</p>
            </div>
        </section>
    )
}

export default AboutProject;