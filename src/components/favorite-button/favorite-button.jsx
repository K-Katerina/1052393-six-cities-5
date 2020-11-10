import React from "react";
import PropTypes from "prop-types";
import {updateFavorite} from "../../store/api-actions";
import {connect} from "react-redux";

const FavoriteButton = (props) => {
  const {className, id, isFavorite, onButtonClick} = props;
  return (
    <button onClick={() => onButtonClick(id, Number(!isFavorite))}
      className={`${className} button ${isFavorite && `place-card__bookmark-button--active`}`} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

FavoriteButton.propTypes = {
  className: PropTypes.string,
  isFavorite: PropTypes.bool,
  id: PropTypes.number,
  onButtonClick: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onButtonClick: (id, status) => dispatch(updateFavorite(id, status))
});

export {FavoriteButton};
export default connect(null, mapDispatchToProps)(FavoriteButton);
