import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {ActionCreator} from "../../store/actions";
import {DEFAULT_SORT_TYPE} from "../../const";
import {connect} from "react-redux";

class Footer extends React.Component {
  componentDidMount() {
    this.props.resetSort();
  }
  render() {
    return (
      <footer className="footer container">
        <Link to="/" className="footer__logo-link">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    );
  }
}

Footer.propTypes = {
  resetSort: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  resetSort: () => {
    dispatch(ActionCreator.changeSortType(DEFAULT_SORT_TYPE));
    dispatch(ActionCreator.openSortMenu(false));
  }
});

export {Footer};
export default connect(null, mapDispatchToProps)(Footer);
