import React from "react";
import {AppRoute} from "../../const";
import PropTypes from "prop-types";
import {isLoggedIn} from "../../store/reducers/user/selectors";
import {withPrivateRoute} from "../../hocs/with-private-route/with-private-route";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import MainPage from "../pages/main-page/main-page";
import RoomPage from "../pages/room-page/room-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import {Redirect, Router, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import history from "../../history";

const App = ({loggedIn}) => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.ROOT} component={MainPage}/>
        <Route exact path={AppRoute.LOGIN} component={withPrivateRoute(SignInPage, !loggedIn, AppRoute.ROOT)}/>
        <Route exact path={AppRoute.FAVORITES} component={withPrivateRoute(FavoritesPage, loggedIn, AppRoute.LOGIN)}/>
        <Route exact path={AppRoute.OFFER} component={RoomPage}/>
        <Redirect to={AppRoute.ROOT}/>
      </Switch>
    </Router>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state),
});

export {App};
export default connect(mapStateToProps)(App);
