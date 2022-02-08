import Header from "../Header/Header";
import SearhForm from "./SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList";
import PreloaderMore from "./PreloaderMore";
import './Movies.css';


function Movies(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn} />
            <main className="movies">
                <SearhForm
                    onUpdateParams={props.onUpdateParams}
                    onChecked={props.onChecked}
                    checked={props.checked} />
                <MoviesCardList
                    cards={props.cards}
                    isPreloader={props.isPreloader}
                    isNotFound={props.isNotFound}
                    isErrSearch={props.isErrSearch}
                    buttonLike={props.buttonLike}
                    onCardSaved={props.onCardSaved}
                    savedCards={props.savedCards} />
                <PreloaderMore />
            </main>
            <Footer />
        </>
    )
}

export default Movies;