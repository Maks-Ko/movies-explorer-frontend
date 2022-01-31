import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <div className="checkbox">
            <label className="checkbox__label">
                <input type="checkbox" />
                <span className="checkbox__label-switch"></span>
            </label>
            <p className="checkbox__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;