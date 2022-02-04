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

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState('');
  const [errResEmail, setErrResEmail] = useState('');
  const [errResIncorrect, setErrResIncorrect] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  
  const [cards, setCards] = useState([]);
  const [savedCards, setSavedCards] = useState([]);
  const [local, setLocal] = useState([]); // переделать на localStorage
 
 
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

  // выход из приложения
  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }



  useEffect(() => {
    if (loggedIn) {
      moviesApi.getMovies()
        .then((data) => {
          setLocal(data);
          // localStorage.setItem('moviesLocal', data);
        })
        .catch((err) => {
          console.log(err);
        });

      mainApi.getItemsMovies()
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  function handleUpdateParams(props) {
    const movies = local.filter(movie => movie.nameRU.toLowerCase().includes(props.params.toLowerCase()));
    setCards(movies);
  }

  return (
    <div className="app">
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
          like={true ? "button__activ" : ""}
          cards={cards}
          onUpdateParams={handleUpdateParams}
        />
        <ProtectedRoute
          component={SavedMovies}
          path='/saved-movies'
          loggedIn={loggedIn}
          cards={savedCards}
          close={true ? "button__activ" : ""}
        />
        <ProtectedRoute
          component={Profile}
          path='/profile'
          loggedIn={loggedIn}
          onLogout={handleLogout}
        />
        <Route path='/not-found'>
          <PageNotFound />
        </Route>
      </Switch>
      <PopupWithNavigation
        isOpen={false ? "popup_is-opened" : ""} />
    </div>
  );
}

export default App;
