import React from 'react';
import './Techs.css'

function Techs() {
    return (
        <section className="techs">
            <h2 className="techs__title">Технологии</h2>
            <hr className="techs__line" />
            <div className="tech-block">
                <h3 className="tech-block__title">7 технологий</h3>
                <p className="tech-block__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className="tech-block__elements">
                    <li className="tech-block__element">HTML</li>
                    <li className="tech-block__element">CSS</li>
                    <li className="tech-block__element">JS</li>
                    <li className="tech-block__element">React</li>
                    <li className="tech-block__element">Git</li>
                    <li className="tech-block__element">Express.js</li>
                    <li className="tech-block__element">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}

export default Techs;