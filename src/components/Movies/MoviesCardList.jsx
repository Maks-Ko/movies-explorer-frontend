import React from 'react';
import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    return (
        <section>
            {props.isPreloader
                ? <Preloader />
                : <div>
                    {props.isNotFound && <p className="movies-list__text">Ничего не найдено.</p>}
                    {props.isErrSearch && <p className="movies-list__text">Во время запроса произошла ошибка.
                    Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.</p>}
                    <ul className="movies-list">
                        {props.cards.map(card => {
                            return (
                                <MoviesCard                                
                                    card={card}
                                    buttonLike={props.buttonLike}
                                    buttonDelete={props.buttonDelete}
                                    isLike={props.isLike}
                                    onCardLike={props.onCardLike}
                                    onCardSaved={props.onCardSaved}
                                    onCardDelete={props.onCardDelete}
                                    savedCards={props.savedCards}
                                    key={card._id || card.movieId}
                                />
                            )
                        }).slice(0, props.moviesMore)}
                    </ul>
                </div>}


        </section>

    )
}

export default MoviesCardList