import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {isLoggedIn} from "../../store/reducers/selectors";
import {AppRoute} from "../../const";


const PrivateRoute = (props) => {
  const {render, path, exact, loggedIn} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          loggedIn ? render(routeProps) : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state),
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
