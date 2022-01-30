import Header from '../Header/Header';
import SearhForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn} />
            <main className="saved-movies">
                <SearhForm />
                <MoviesCardList
                    close={props.close} />
                <div className="saved-movies__block"></div>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;