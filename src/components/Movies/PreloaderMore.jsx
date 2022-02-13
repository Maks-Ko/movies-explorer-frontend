import './PreloaderMore.css';

function PreloaderMore(props) {
    return(
        <section className="preloader-more">
            <button onClick={props.onClickMore} className="preloader-more__button">Ещё</button>
        </section>
    )
}

export default PreloaderMore;