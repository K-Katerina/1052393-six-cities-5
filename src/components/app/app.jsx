import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";
import {Redirect, Switch, Route, BrowserRouter} from "react-router-dom";
import SignIn from "../sign-in/sign-in";
import Favorites from "../favorites/favorites";
import Room from "../room/room";

const App = (props) => {
  const {rentalOfferCount} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main rentalOfferCount={rentalOfferCount}/>
        </Route>
        <Route exact path="/login">
          <SignIn/>
        </Route>
        <Route exact path="/favorites">
          <Favorites/>
        </Route>
        <Route exact path="/offer/:id" component={Room}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentalOfferCount: PropTypes.number.isRequired,
};

export default App;
