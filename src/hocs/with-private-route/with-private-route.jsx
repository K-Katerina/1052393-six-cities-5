import React from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

export const withPrivateRoute = (Component, isLoggedIn, URL = `/`) => (props) => {
  if (isLoggedIn) {
    return <Component {...props}/>;
  } else {
    return <Redirect to={URL}/>;
  }
};

withPrivateRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};
