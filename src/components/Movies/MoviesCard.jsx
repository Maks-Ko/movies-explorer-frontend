import './MoviesCard.css'
import photo from '../../images/pic__COLOR_pic.png';

function MoviesCard(props) {
    return(
        <li className="card">
            <img className="cadr__photo" src={photo} alt="фото фильма" />
            <div className="card__lable">
                <div className="card__lable-text">
                    <p className="card__title">33 слова о дизайне</p>
                    <button className={`card__button ${props.like} card__button_status_like card__button_status_like-active`}></button>
                    <button className={`card__button ${props.close} card__button_status_close`}></button>
                </div>
                <p className="card__duration">1ч 21м</p>                                
            </div>           
        </li>
    )
}

export default MoviesCard;