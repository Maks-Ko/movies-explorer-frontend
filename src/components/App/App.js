import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupWithNavigation from '../PopupWithNavigation/PopupWithNavigation';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <div className="app">
      <Switch>
        <Route exact path='/'>
          <Main
            loggedIn={loggedIn} />
        </Route>
        <Route path='/movies'>
          <Movies
            loggedIn={true}
            like={true ? "button__activ" : ""} />
        </Route>
        <Route path='/saved-movies'>
          <SavedMovies
            loggedIn={true}
            close={true ? "button__activ" : ""} />
        </Route>
        <Route path='/profile'>
          <Profile
            loggedIn={true} />
        </Route>
        <Route path='/signin'>
          <Login />
        </Route>
        <Route path='/signup'>
          <Register />
        </Route>
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
