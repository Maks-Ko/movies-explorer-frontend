import Header from "../Header/Header";
import SearhForm from "./SearchForm";
import Footer from "../Footer/Footer";
import MoviesCardList from "./MoviesCardList";
import './Movies.css';

function Movies(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn} />
            
            <main className="movies">
                <SearhForm />
                <MoviesCardList />
            </main>            
            <Footer />
        </>
    )
}

export default Movies;