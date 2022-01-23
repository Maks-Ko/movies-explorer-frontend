import './Main.css';
import Header from '../Header/Header';
import NavTab from './NavTab';
import AboutProject from './AboutProject';


function Main() {
    return (
        <>
            <Header />
            <main className="main">
                <NavTab />
                <AboutProject />
            </main>
        </>

    )
}

export default Main;