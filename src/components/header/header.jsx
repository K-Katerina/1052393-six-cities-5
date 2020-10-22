import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";
import {DEFAULT_SORT_TYPE} from "../../const";

class Header extends React.Component {

  componentDidMount() {
    this.props.resetSort();
  }

  render() {
    const {isLoggedIn} = this.props;

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
                  <Link to={isLoggedIn ? `/favorites` : `/login`}
                    className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    {isLoggedIn ?
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span> :
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
  }
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
  resetSort: PropTypes.func
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  resetSort: () => {
    dispatch(ActionCreator.changeSortType(DEFAULT_SORT_TYPE));
    dispatch(ActionCreator.openSortMenu(false));
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
