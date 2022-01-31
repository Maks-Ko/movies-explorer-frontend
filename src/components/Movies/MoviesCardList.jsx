import './MoviesCardList.css';
import MoviesCard from './MoviesCard';

function MoviesCardList(props) {
    return (
        <section>
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