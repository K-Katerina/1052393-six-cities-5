import React from "react";
import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import RoomPage from "../pages/room-page/room-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage/>}/>
        <Route exact path="/login" render={() => <SignInPage/>}/>
        <Route exact path="/favorites" render={() => <FavoritesPage/>}/>
        <Route exact path="/offer/:id" component={RoomPage}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
