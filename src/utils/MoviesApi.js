class MoviesApi {
    constructor() {
        this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
        this._headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }

    // получить данные фильмов
    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers
        })
        .then(this._checkResponse)
    }

    // проверка ответа
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
}

const moviesApi = new MoviesApi();

export default moviesApi;