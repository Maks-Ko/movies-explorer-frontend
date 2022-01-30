import './FilterCheckbox.css'

function FilterCheckbox() {
    return (
        <dev className="checkbox">
            <label class="checkbox__label">
                <input type="checkbox" />
                <span class="checkbox__label-switch"></span>
            </label>
            <p className="checkbox__text">Короткометражки</p>
        </dev>
    )
}

export default FilterCheckbox;