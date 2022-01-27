import './Main.css';
import Header from '../Header/Header';
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';


function Main() {
    return (
        <>
            <Header />
            <main className="main">
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
                <Portfolio />
            </main>
        </>

    )
}

export default Main;