import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupWithNavigation from '../PopupWithNavigation/PopupWithNavigation';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import './App.css';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState('');
  const [errResEmail, setErrResEmail] = useState('');
  const [errResIncorrect, setErrResIncorrect] = useState('');
  const [currentUser, setCurrentUser] = useState({});
  const [isPreloader, setIsPreloader] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [moviesSavedNotFound, setMoviesSavedNotFound] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (isRegister === true) {
      history.push('/signin');
    }
  }, [isRegister, history]);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn === true) {
      history.push('/movies');
    }
  }, [loggedIn, history])

  // регистрация пользователя
  function handleRegister({ userName, email, password }) {
    mainApi.createUser({ userName, email, password })
      .then((data) => {
        setIsRegister(true);
      })
      .catch((err) => {
        setErrResEmail(err);
        console.log(err);
      })
  };

  // авторизация в приложении
  function handleLogin({ email, password }) {
    mainApi.authUser({ email, password })
      .then((user) => {
        localStorage.setItem('jwt', user.token);
        setLoggedIn(true)
      })
      .catch((err) => {
        setErrResIncorrect(err)
        console.log(err);
      })
  };

  // проверка токена
  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi.getToken({ jwt })
        .then((user) => {
          setCurrentUser(user.data);
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // редактировать профиль
  function handleUpdateUser({ name, email }) {
    mainApi.updateUser({ name, email })
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((err) => {
        setErrResIncorrect(err);
        console.log(err); // "Что-то пошло не так: ..."
      });
  }

  // выход из приложения
  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('moviesLocal')
    setLoggedIn(false);
    setCurrentUser({});
    setCards([]);
    setSavedCards([]);
  }

  // получаем данные фильмах
  useEffect(() => {
    if (loggedIn) {
      mainApi.getMovies()
        .then((data) => {
          setSavedCards(data.data);
          const movies = JSON.parse(localStorage.getItem('moviesLocal'));
          if (movies) {
            setCards(JSON.parse(localStorage.getItem('moviesLocal')));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  // поиск фильмов
  function searchMovies(array, params) {
    const movies = array.filter(movie => movie.nameRU.toLowerCase().includes(params.toLowerCase()));
    return movies;
  }

  // поиск фильмов на '/movies'
  function handleUpdateParamsMovies(props) {
    setMoviesNotFound(false);
    setIsPreloader(true);
    moviesApi.getMovies()
      .then((data) => {
        const moviesArray = data.map((movie) => {
          return {
            country: movie.country,
            director: movie.director,
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co${movie.image.url}`,
            trailer: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU,
            nameEN: movie.nameEN,
          }
        });

        const movies = searchMovies(moviesArray, props.params)
        localStorage.setItem('moviesLocal', JSON.stringify(movies));
        setCards(JSON.parse(localStorage.getItem('moviesLocal')));
        movies.length > 0 ? setMoviesNotFound(false) : setMoviesNotFound(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  // поиск фильмов на '/saved-movies'
  function handleUpdateParamsSavedMovies(props) {
    setMoviesSavedNotFound(false);
    setIsPreloader(true);
    mainApi.getMovies()
      .then((data) => {
        const movies = searchMovies(data.data, props.params);
        setSavedCards(movies);
        movies.length > 0 ? setMoviesSavedNotFound(false) : setMoviesSavedNotFound(true);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  // добавить или удалить фильм
  function handleCardSaved(data) {
    const isSavedCard = savedCards.some((c) => c.movieId === data.card.movieId);
    if (!isSavedCard) {
      mainApi.addMovies(data.card)
        .then((newCard) => {
          setSavedCards([newCard.data, ...savedCards]);
        })
        .catch((err) => {
          console.log(err); // "Что-то пошло не так: ..."
        });
    } else {
      const movieDeleted = savedCards.filter((c) => c.movieId === data.card.movieId).shift();
      handleCardDelete(movieDeleted._id);
    }
  }

  // удалить карточку фильм из сохраненных
  function handleCardDelete(idCard) {
    mainApi.deleteMovies(idCard)
      .then(() => {
        setSavedCards((savedCards) => savedCards.filter((c) => c._id !== idCard))
      })
      .catch((err) => {
        console.log(err); // "Что-то пошло не так: ..."
      });
  }


  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main
              headerBackground={'header__background'} />
          </Route>
          <Route path='/signin'>
            <Login
              onLogin={handleLogin}
              tokenCheck={tokenCheck}
              errRespons={errResIncorrect} />
          </Route>
          <Route path='/signup'>
            <Register
              onRegister={handleRegister}
              errRespons={errResEmail} />
          </Route>
          <ProtectedRoute
            component={Movies}
            path='/movies'
            loggedIn={loggedIn}
            isPreloader={isPreloader ? "preloader_active" : ""}
            isNotFound={moviesNotFound}
            buttonLike={true ? "button__activ" : ""}
            cards={cards}
            onUpdateParams={handleUpdateParamsMovies}
            onCardSaved={handleCardSaved}
            savedCards={savedCards}
          />
          <ProtectedRoute
            component={SavedMovies}
            path='/saved-movies'
            loggedIn={loggedIn}
            cards={savedCards}
            isNotFound={moviesSavedNotFound}
            buttonDelete={true ? "button__activ" : ""}
            onUpdateParams={handleUpdateParamsSavedMovies}
            onCardDelete={handleCardDelete}
          />
          <ProtectedRoute
            component={Profile}
            path='/profile'
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            errRespons={errResIncorrect}
            onLogout={handleLogout}
          />
          <Route path='/not-found'>
            <PageNotFound />
          </Route>
        </Switch>
        <PopupWithNavigation
          isOpen={false ? "popup_is-opened" : ""} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
