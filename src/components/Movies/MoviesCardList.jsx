import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    return (
        <section>
            <Preloader />
            <ul className="movies-list">
                {props.cards.map(card => {return(
                    <MoviesCard
                    nameRu={card.nameRU}
                    duration={card.duration}
                    image={card.image.url}
                    like={props.like}
                    close={props.close} />
                )})}
                
            </ul>
        </section>

    )
}

export default MoviesCardList