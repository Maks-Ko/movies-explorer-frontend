import './Main.css';
import Header from '../Header/Header';
import NavTab from '../Main/NavTab';


function Main() {
    return (
        <>
            <Header />
            <NavTab />
            <main className="main">
                <p>
                    Отображается страница «О проекте»
                </p>
            </main>
        </>

    )
}

export default Main;