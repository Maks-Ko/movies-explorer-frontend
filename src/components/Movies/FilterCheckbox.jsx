import { useLocation } from 'react-router';
import './FilterCheckbox.css'

function FilterCheckbox(props) {
    const location = useLocation();

    function localMovies() {
        if (location.pathname === '/movies') {
            return props.checked;
        } else if (location.pathname === '/saved-movies') {
            return props.checked;
        }
    }

    const isChecked = localMovies();
    
    return (
        <div className="checkbox">
            <label className="checkbox__label">
                <input type="checkbox" checked={isChecked} onChange={props.onChecked} />
                <span className="checkbox__label-switch"></span>
            </label>
            <p className="checkbox__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;