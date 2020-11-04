import React from "react";
import {Redirect} from "react-router-dom";
import PropTypes from "prop-types";

export const withPrivateRoute = (Component, isLoggedIn, URL = `/`) => {
  class WithPrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (isLoggedIn) {
        return <Component {...this.props}/>;
      } else {
        return <Redirect to={URL}/>;
      }
    }
  }

  withPrivateRoute.propTypes = {
    loggedIn: PropTypes.bool.isRequired
  };

  return WithPrivateRoute;
};
