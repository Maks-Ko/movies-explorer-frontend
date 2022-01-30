import './MoviesCardList.css';
import MoviesCard from './MoviesCard';

function MoviesCardList() {
    return (
        <section>
            <ul className="movies-list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
        </section>

    )
}

export default MoviesCardList