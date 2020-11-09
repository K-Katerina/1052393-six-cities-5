import {AppRoute} from "../../const";
import React from "react";
import PropTypes from "prop-types";
import {updateFavorite} from "../../store/api-actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {isLoggedIn} from "../../store/reducers/user/selectors";

const FavoriteButton = (props) => {
  const {className, id, isFavorite, loggedIn, history, onButtonClick} = props;
  return (
    <button onClick={() => {
      if (!loggedIn) {
        history.push(AppRoute.LOGIN);
      } else {
        onButtonClick(id, Number(!isFavorite));
      }
    }} className={`${className} button ${isFavorite && `place-card__bookmark-button--active`}`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  className: PropTypes.string,
  loggedIn: PropTypes.bool,
  isFavorite: PropTypes.bool,
  id: PropTypes.number,
  history: PropTypes.object,
  onButtonClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state),
});

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (id, status) => dispatch(updateFavorite(id, status))
});

export {FavoriteButton};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoriteButton));
