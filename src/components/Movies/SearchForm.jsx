import FilterCheckbox from './FilterCheckbox';
import search from '../../images/find.svg';
import './SearchForm.css';

function SearhForm() {
    return(
        <section className="searh-form">
            <form name="movie" id="movie" className="form__searh">
                <fieldset className="form__searh-elements">
                    <input name="movie_name" id="movie_name" className="form__searh-movie" type="text" placeholder="Фильм" />
                    <button type="submit" className="form__searh-button">
                        <img src={search} alt="поиск"></img>
                    </button>
                </fieldset>
            </form>
            <FilterCheckbox />
        </section>
    )
}

export default SearhForm;