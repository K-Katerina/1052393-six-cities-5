import React from "react";
import PropTypes from "prop-types";
import MainPage from "../pages/main-page/main-page";
import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import RoomPage from "../pages/room-page/room-page";

const App = (props) => {
  const {rentalOfferCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage rentalOfferCount={rentalOfferCount}/>}/>
        <Route exact path="/login" component={SignInPage}/>
        <Route exact path="/favorites" component={FavoritesPage}/>
        <Route exact path="/offer/:id" component={RoomPage}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentalOfferCount: PropTypes.number.isRequired,
};

export default App;
