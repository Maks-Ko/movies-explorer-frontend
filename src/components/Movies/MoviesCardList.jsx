import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    const [notFound, setNotFound] = useState();

    useEffect(() => {
        if (props.cards.length === 0) {
            setNotFound(true);
        } else {
            setNotFound(false);
        }
    }, [props])

    return (
        <section>
            {props.isPreloader
                ? <Preloader />
                : <div>
                    {notFound && <p className="movies-list__text">Ничего не найдено.</p>}
                    <ul className="movies-list">
                        {props.cards.map(card => {
                            return (
                                <MoviesCard
                                    card={card}
                                    like={props.like}
                                    close={props.close}
                                    key={card._id || card.movieId}
                                    onCardLike={props.onCardLike}
                                    onCardDelete={props.onCardDelete}
                                />
                            )
                        })}
                    </ul>
                </div>}


        </section>

    )
}

export default MoviesCardList