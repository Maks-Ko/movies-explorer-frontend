import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Movies(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn} />
            <p>
                Отображается страница «Фильмы»
            </p>
            {/* <Footer /> */}
        </>
    )
}

export default Movies;