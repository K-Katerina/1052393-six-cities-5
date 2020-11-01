import React from "react";
import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import RoomPage from "../pages/room-page/room-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import {AppRoute} from "../../const";
import PrivateRoute from "../private-route/private-route";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT} render={() => <MainPage/>}/>
        <Route exact path={AppRoute.LOGIN} render={() => <SignInPage/>}/>
        <PrivateRoute exact path={AppRoute.FAVORITES} render={() => <FavoritesPage/>}/>
        <Route exact path={AppRoute.OFFER} component={RoomPage}/>
        <Redirect to={AppRoute.ROOT}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
