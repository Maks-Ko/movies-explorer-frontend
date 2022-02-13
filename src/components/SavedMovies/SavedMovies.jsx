import Header from '../Header/Header';
import SearhForm from '../Movies/SearchForm';
import MoviesCardList from '../Movies/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn}
                onClickOpenMenu={props.onClickOpenMenu} />
            <main className="saved-movies">
                <SearhForm 
                    onUpdateParams={props.onUpdateParams}
                    onChecked={props.onChecked}
                    checked={props.checked} />
                <MoviesCardList
                    cards={props.cards}
                    isNotFound={props.isNotFound}
                    isErrSearch={props.isErrSearch}
                    buttonDelete={props.buttonDelete}
                    onCardDelete={props.onCardDelete} />
                <div className="saved-movies__block"></div>
            </main>
            <Footer />
        </>
    )
}

export default SavedMovies;