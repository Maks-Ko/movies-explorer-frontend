import './Main.css';
import Header from '../Header/Header';
import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Techs';


function Main() {
    return (
        <>
            <Header />
            <main className="main">
                <NavTab />
                <AboutProject />
                <Techs />
            </main>
        </>

    )
}

export default Main;