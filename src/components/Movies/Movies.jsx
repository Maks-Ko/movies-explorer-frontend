import Header from "../Header/Header";
import SearhForm from "./SearchForm";
import Footer from "../Footer/Footer";

function Movies(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn} />
            <SearhForm />
            <p>
                Отображается страница «Фильмы»
            </p>
            <Footer />
        </>
    )
}

export default Movies;