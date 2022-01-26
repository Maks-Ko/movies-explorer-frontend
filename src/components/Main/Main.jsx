import './Main.css';
import Header from '../Header/Header';
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs';
import AboutMe from './AboutMe';


function Main() {
    return (
        <>
            <Header />
            <main className="main">
                <NavTab />
                <AboutProject />
                <Techs />
                <AboutMe />
            </main>
        </>

    )
}

export default Main;