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
  const [isErrSearch, setIsErrSearch] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isPreloader, setIsPreloader] = useState(false);
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [moviesNotFound, setMoviesNotFound] = useState(false);
  const [moviesSavedNotFound, setMoviesSavedNotFound] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checkedSearchMovies, setCheckedSearchMovies] = useState(false)
  const [numberMoviesShow, setNumberMoviesShow] = useState(3);
  const [numberMoviesMore, setNumberMoviesMore] = useState(3);
  const [buttonMore, setbuttonMore] = useState(true);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isRegister === true) {
      history.push('/movies');
    }
  }, [isRegister, history]);

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (loggedIn === true) {
      history.push('/movies');
    }
  }, [loggedIn, history]);

  // ?????????????????????? ????????????????????????
  function handleRegister({ userName, email, password }) {
    mainApi.createUser({ userName, email, password })
      .then((data) => {
        mainApi.authUser({ email, password })
          .then((user) => {
            localStorage.setItem('jwt', user.token);
            setIsRegister(true);
            setLoggedIn(true)
            tokenCheck();
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setErrResEmail(err);
        console.log(err);
      })
  };

  // ?????????????????????? ?? ????????????????????
  function handleLogin({ email, password }) {
    mainApi.authUser({ email, password })
      .then((user) => {
        localStorage.setItem('jwt', user.token);
        setLoggedIn(true)
        tokenCheck();
      })
      .catch((err) => {
        setErrResIncorrect(err)
        console.log(err);
      })
  };

  // ???????????????? ????????????
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

  // ?????????????????????????? ??????????????
  function handleUpdateUser({ name, email }) {
    mainApi.updateUser({ name, email })
      .then((user) => {
        setCurrentUser(user.data);
      })
      .catch((err) => {
        setErrResIncorrect(err);
        console.log(err); // "??????-???? ?????????? ???? ??????: ..."
      });
  }

  // ?????????? ???? ????????????????????
  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('moviesLocal');
    localStorage.removeItem('searchMoviesLocal');
    localStorage.removeItem('params');
    localStorage.removeItem('checked');
    localStorage.removeItem('checkedSearch');
    localStorage.removeItem('moviesLocalChecked');
    localStorage.removeItem('moviesSearchLocalChecked');
    setLoggedIn(false);
    setCurrentUser({});
    setCards([]);
    setSavedCards([]);
    setChecked(false);
    setCheckedSearchMovies(false);
    history.push('/');
  }

  // ???????????????? ???????????? ??????????????
  useEffect(() => {
    if (loggedIn) {
      mainApi.getMovies()
        .then((data) => {
          const moviesCurrentUser = data.data.filter((c) => c.owner === currentUser._id);
          const moviesSearchLocalChecked = JSON.parse(localStorage.getItem('moviesSearchLocalChecked'));

          if (!checkedSearchMovies) {
            setSavedCards(moviesCurrentUser);
            localStorage.setItem('searchMoviesLocal', JSON.stringify(moviesCurrentUser));
          } else if (checkedSearchMovies && moviesSearchLocalChecked) {
            setSavedCards(moviesSearchLocalChecked);
          }

          const movies = JSON.parse(localStorage.getItem('moviesLocal'));
          const moviesChecked = JSON.parse(localStorage.getItem('moviesLocalChecked'));

          if (!checked && movies) {
            setCards(movies);
          } else if (checked && moviesChecked) {
            setCards(moviesChecked);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn, checked, checkedSearchMovies, currentUser]);

  // ?????????? ?????????????? ???? '/movies'
  function handleUpdateParamsMovies(props) {
    setMoviesNotFound(false);
    setIsErrSearch(false)
    setIsPreloader(true);
    setNumberMoviesShow(numberMoviesShow);
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

        localStorage.setItem('params', props.params);

        localStorage.setItem('moviesLocal', JSON.stringify(movies));
        setCards(JSON.parse(localStorage.getItem('moviesLocal')));
        movies.length > 0 ? setMoviesNotFound(false) : setMoviesNotFound(true);
      })
      .catch((err) => {
        setIsErrSearch(true);
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  // ?????????? ?????????????? ???? '/saved-movies'
  function handleUpdateParamsSavedMovies(props) {
    setMoviesSavedNotFound(false);
    setIsErrSearch(false);
    setIsPreloader(true);
    mainApi.getMovies()
      .then((data) => {
        const moviesCurrentUser = data.data.filter((c) => c.owner === currentUser._id);
        const movies = searchMovies(moviesCurrentUser, props.params);
        localStorage.setItem('searchMoviesLocal', JSON.stringify(movies));
        setSavedCards(JSON.parse(localStorage.getItem('searchMoviesLocal')));
        movies.length > 0 ? setMoviesSavedNotFound(false) : setMoviesSavedNotFound(true);
      })
      .catch((err) => {
        setIsErrSearch(true);
        console.log(err);
      })
      .finally(() => {
        setIsPreloader(false);
      });
  }

  // ???????????? ??????????????, '??????????'
  function searchMovies(array, params) {
    const movies = array.filter(movie => movie.nameRU.toLowerCase().includes(params.toLowerCase()));
    return movies;
  }

  // ?????????????????????????????? ???? '/movies'
  function handleCheckedMovies() {
    const movies = JSON.parse(localStorage.getItem('moviesLocal'));
    if (!checked) {
      const search = movies ? movies.filter((c) => c.duration <= 40) : [];
      localStorage.setItem('checked', JSON.stringify(true));
      setChecked(true);
      localStorage.setItem('moviesLocalChecked', JSON.stringify(search));
      setCards(search)
    } else {
      setChecked(false)
      localStorage.setItem('checked', JSON.stringify(false));
      setCards(movies ? movies : [])
    }
  }

  useEffect(() => {
    const checkedLocal = JSON.parse(localStorage.getItem('checked'));
    if (checkedLocal) {
      setChecked(checkedLocal);
    }
  }, []);

  // ?????????????????????????????? ???? '/saved-movies'
  function handleCheckedSearchMovies() {
    const movies = JSON.parse(localStorage.getItem('searchMoviesLocal'));
    if (!checkedSearchMovies) {
      const search = movies.filter((c) => c.duration <= 40);
      localStorage.setItem('checkedSearch', JSON.stringify(true));
      setCheckedSearchMovies(true)
      localStorage.setItem('moviesSearchLocalChecked', JSON.stringify(search));
      setSavedCards(search)
    } else {
      localStorage.setItem('checkedSearch', JSON.stringify(false));
      setCheckedSearchMovies(false)
      setSavedCards(movies)
    }
  }

  useEffect(() => {
    const checkedLocal = JSON.parse(localStorage.getItem('checkedSearch'));
    if (checkedLocal) {
      setCheckedSearchMovies(checkedLocal);
    }
  }, []);

  // ???????????????? ???????????? ???? ???????????????? "??????"
  function handleClickMore() {
    setNumberMoviesShow(numberMoviesShow + numberMoviesMore);
  }

  useEffect(() => {
    let isMore = cards.slice(numberMoviesShow).length;
    if (isMore !== 0) {
      setbuttonMore(true);
    } else {
      setbuttonMore(false);
    }
  }, [cards, numberMoviesShow])

  // ???????????????? ?????? ?????????????? ??????????
  function handleCardSaved(data) {
    const isSavedCard = savedCards.some((c) => c.movieId === data.card.movieId);
    if (!isSavedCard) {
      mainApi.addMovies(data.card)
        .then((newCard) => {
          localStorage.setItem('searchMoviesLocal', JSON.stringify([newCard.data, ...savedCards]));
          setSavedCards([newCard.data, ...savedCards]);
        })
        .catch((err) => {
          console.log(err); // "??????-???? ?????????? ???? ??????: ..."
        });
    } else {
      const movieDeleted = savedCards.filter((c) => c.movieId === data.card.movieId).shift();
      handleCardDelete(movieDeleted._id);
    }
  }

  // ?????????????? ???????????????? ?????????? ???? ??????????????????????
  function handleCardDelete(idCard) {
    mainApi.deleteMovies(idCard)
      .then(() => {
        setSavedCards((savedCards) => savedCards.filter((c) => c._id !== idCard))
      })
      .catch((err) => {
        console.log(err); // "??????-???? ?????????? ???? ??????: ..."
      });
  }

  function handleClickOpenMenu() {
    setIsOpenMenu(true);
  }

  function handleClickCloseMenu() {
    setIsOpenMenu(false)
  }

  useEffect(() => {
    setIsOpenMenu(false);
  }, [history]);


  return (
    <div className="app">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route exact path='/'>
            <Main
              headerBackground={'header__background'}
              loggedIn={loggedIn}
              onClickOpenMenu={handleClickOpenMenu} />
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
            isErrSearch={isErrSearch}
            buttonLike={true ? "button__activ" : ""}
            cards={cards}
            onChecked={handleCheckedMovies}
            checked={checked}
            onUpdateParams={handleUpdateParamsMovies}
            onCardSaved={handleCardSaved}
            onClickMore={handleClickMore}
            moviesMore={numberMoviesShow}
            buttonMore={buttonMore}
            savedCards={savedCards}
            onClickOpenMenu={handleClickOpenMenu}
          />
          <ProtectedRoute
            component={SavedMovies}
            path='/saved-movies'
            loggedIn={loggedIn}
            cards={savedCards}
            onChecked={handleCheckedSearchMovies}
            checked={checkedSearchMovies}
            isNotFound={moviesSavedNotFound}
            isErrSearch={isErrSearch}
            buttonDelete={true ? "button__activ" : ""}
            onUpdateParams={handleUpdateParamsSavedMovies}
            onCardDelete={handleCardDelete}
            onClickOpenMenu={handleClickOpenMenu}
          />
          <ProtectedRoute
            component={Profile}
            path='/profile'
            loggedIn={loggedIn}
            onUpdateUser={handleUpdateUser}
            errRespons={errResIncorrect}
            onLogout={handleLogout}
            onClickOpenMenu={handleClickOpenMenu}
          />
          <Route path='/not-found'>
            <PageNotFound />
          </Route>
        </Switch>
        <PopupWithNavigation
          isOpenMenu={isOpenMenu ? "popup_is-opened" : ""}
          onClickCloseMenu={handleClickCloseMenu} />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
