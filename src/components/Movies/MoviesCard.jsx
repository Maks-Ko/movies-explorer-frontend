import React from 'react';
import { useLocation } from 'react-router';
import './MoviesCard.css'

function MoviesCard({ card, ...props }) {
    const location = useLocation();

    // постновка и удаление лайка
    function likeCard() {
        if (location.pathname === '/movies') {
            return props.savedCards.some((c) => c.movieId === card.movieId);
        }
    }
    const isLikedCard = likeCard();

    function handleCardSaved() {
        props.onCardSaved({ card, ...props });
    }

    function handleDeleteClick() {
        props.onCardDelete(card._id);
    }

    return (
        <li className="card">
            <a href={card.trailer} target="_blank"><img className="cadr__photo" src={`${card.image}`} alt="фото фильма" /></a>
            <div className="card__lable">
                <div className="card__lable-text">
                    <p className="card__title">{card.nameRU}</p>
                    <button onClick={handleCardSaved} className={`card__button ${props.buttonLike} card__button_status_like ${isLikedCard ? "card__button_status_like-active" : ""}`}></button>
                    <button onClick={handleDeleteClick} className={`card__button ${props.buttonDelete} card__button_status_close`}></button>
                </div>
                <p className="card__duration">{`${card.duration} м`}</p>
            </div>
        </li>
    )
}

export default MoviesCard;