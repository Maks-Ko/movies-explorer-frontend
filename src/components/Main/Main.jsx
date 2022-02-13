import './Main.css';
import Header from '../Header/Header';
import Promo from './Promo';
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Footer from '../Footer/Footer';


function Main(props) {
    return (
        <>
            <Header
                loggedIn={props.loggedIn}
                headerBackground={props.headerBackground}
                onClickOpenMenu={props.onClickOpenMenu} />
            <main className="main">
                <Promo />
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
            <Footer />
        </>

    )
}

export default Main;