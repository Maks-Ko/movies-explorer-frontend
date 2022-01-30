import Header from "../Header/Header";
import SearhForm from "./SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList";
import Preloader from "./Preloader";
import './Movies.css';

function Movies(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn} />
            
            <main className="movies">
                <SearhForm />
                <MoviesCardList />
                <Preloader />
            </main>            
            <Footer />
        </>
    )
}

export default Movies;