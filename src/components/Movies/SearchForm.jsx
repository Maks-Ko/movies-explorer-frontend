import FilterCheckbox from './FilterCheckbox';
import search from '../../images/find.svg';
import './SearchForm.css';

function SearhForm() {
    return(
        <section className="searh-form">
            <form name="movie" id="movie" className="form">
                <fieldset className="form__elements">
                    <input name="movie_name" id="movie_name" className="form__movie" type="text" placeholder="Фильм" />
                    <span id="movie_name-error"></span>
                    <button type="submit" className="form__button">
                        <img src={search} alt="поиск"></img>
                    </button>
                </fieldset>
            </form>
            <FilterCheckbox />
        </section>
    )
}

export default SearhForm;