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
                <SearhForm />
                <MoviesCardList
                    like={props.like} />
                <PreloaderMore />
            </main>
            <Footer />
        </>
    )
}

export default Movies;