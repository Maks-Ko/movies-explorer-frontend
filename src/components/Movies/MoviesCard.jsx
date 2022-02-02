import './MoviesCard.css'

function MoviesCard(props) {
    return(
        <li className="card">
            <img className="cadr__photo" src={`https://api.nomoreparties.co/${props.image}`} alt="фото фильма" />
            <div className="card__lable">
                <div className="card__lable-text">
                    <p className="card__title">{props.nameRu}</p>
                    <button className={`card__button ${props.like} card__button_status_like card__button_status_like-active`}></button>
                    <button className={`card__button ${props.close} card__button_status_close`}></button>
                </div>
                <p className="card__duration">{`${props.duration} м`}</p>                                
            </div>           
        </li>
    )
}

export default MoviesCard;