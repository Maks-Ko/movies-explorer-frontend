import './MoviesCardList.css';
import MoviesCard from './MoviesCard';
import Preloader from "../Preloader/Preloader";

function MoviesCardList(props) {
    return (
        <section>
            <Preloader />
            <ul className="movies-list">
                <MoviesCard
                    like={props.like}
                    close={props.close} />
                <MoviesCard
                    like={props.like}
                    close={props.close} />
                <MoviesCard
                    like={props.like}
                    close={props.close} />
                <MoviesCard
                    like={props.like}
                    close={props.close} />
                <MoviesCard
                    like={props.like}
                    close={props.close} />
                <MoviesCard
                    like={props.like}
                    close={props.close} />
            </ul>
        </section>

    )
}

export default MoviesCardList