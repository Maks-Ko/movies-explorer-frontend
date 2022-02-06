import './MoviesCard.css'

function MoviesCard({ card, ...props}) {
    function handleDeleteClick() {
        props.onCardDelete(props)
    }
    
    return(
        <li className="card">
            <img className="cadr__photo" src={`${card.image}`} alt="фото фильма" />
            <div className="card__lable">
                <div className="card__lable-text">
                    <p className="card__title">{card.nameRU}</p>
                    <button className={`card__button ${props.like} card__button_status_like card__button_status_like-active`}></button>
                    <button onClick={handleDeleteClick} className={`card__button ${props.close} card__button_status_close`}></button>
                </div>
                <p className="card__duration">{`${card.duration} м`}</p>                                
            </div>           
        </li>
    )
}

export default MoviesCard;