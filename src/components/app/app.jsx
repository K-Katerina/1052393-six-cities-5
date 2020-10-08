import React from "react";
import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {OfferPropType} from "../../types";
import {MainPage} from "../pages/main-page/main-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import RoomPage from "../pages/room-page/room-page";

const App = (props) => {
  const {offers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage offers={offers}/>}/>
        <Route exact path="/login" component={SignInPage}/>
        <Route exact path="/favorites" component={FavoritesPage}/>
        <Route exact path="/offer/:id" component={RoomPage}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(OfferPropType).isRequired
};

export default App;
