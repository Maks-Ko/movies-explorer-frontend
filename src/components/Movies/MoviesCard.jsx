import './MoviesCard.css'
import photo from '../../images/pic__COLOR_pic.png';

function MoviesCard() {
    return(
        <li className="card">
            <img className="cadr__photo" src={photo} alt="фото фильма" />
            <div className="card__lable">
                <div className="card__lable-text">
                    <p className="card__title">33 слова о дизайне</p>
                    <button className="card__likes card__likes_active"></button>
                </div>
                <p className="card__duration">1ч 21м</p>                                
            </div>           
        </li>
    )
}

export default MoviesCard;