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
                loggedIn={props.loggedIn}
                onClickOpenMenu={props.onClickOpenMenu} />
            <main className="movies">
                <SearhForm
                    onUpdateParams={props.onUpdateParams}
                    onChecked={props.onChecked}
                    checked={props.checked} />
                <MoviesCardList
                    cards={props.cards}
                    moviesMore={props.moviesMore}
                    isPreloader={props.isPreloader}
                    isNotFound={props.isNotFound}
                    isErrSearch={props.isErrSearch}
                    buttonLike={props.buttonLike}
                    onCardSaved={props.onCardSaved}
                    savedCards={props.savedCards}
                    s={props.moviesIndex} />
                {props.buttonMore && <PreloaderMore onClickMore={props.onClickMore} />}
            </main>
            <Footer />
        </>
    )
}

export default Movies;