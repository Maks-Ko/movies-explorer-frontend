class MainApi {
    constructor() {
        this._baseUrl = 'http://mavko.movies.nomoredomains.rocks';
        this._headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };
    }

    // регистрация пользователя
    createUser(dataUser) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: dataUser.userName,
                email: dataUser.email,
                password: dataUser.password,
            })
        })
            .then(this._checkResponse)
    }

    // авторизация на сервере
    authUser(dataUser) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email: dataUser.email,
                password: dataUser.password,
            })
        })
            .then(this._checkResponse)
    }

    // проверка валидности токена
    getToken({ jwt }) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: { ...this._headers, Authorization: `Bearer ${jwt}` }
        })
            .then(this._checkResponse)
    }

    // редактирование профиля
    updateUser(dataUser) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
            body: JSON.stringify({
                name: dataUser.name,
                email: dataUser.email,
            })
        })
            .then(this._checkResponse)
    }

    // получить данные сохраненных фильмов
    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        })
            .then(this._checkResponse)
    }

    // добавить фильм в сохраненные
    addMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        })
            .then(this._checkResponse)

    }

    // удалить фильм
    deleteMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'DELETE',
            headers: { ...this._headers, Authorization: `Bearer ${localStorage.getItem('jwt')}` },
        })
            .then(this._checkResponse)        
    }

    // проверка ответа
    _checkResponse(response) {
        return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
    }
}

const mainApi = new MainApi();

export default mainApi;