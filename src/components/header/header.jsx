import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUserLogin, isLoggedIn} from "../../store/reducers/selectors";

const Header = (props) => {
  const {loggedIn, login} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link to={loggedIn ? `/favorites` : `/login`}
                  className="header__nav-link header__nav-link--profile">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {loggedIn ?
                    <span className="header__user-name user__name">{login}</span> :
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  loggedIn: PropTypes.bool,
  login: PropTypes.string
};

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state),
  login: getUserLogin(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
