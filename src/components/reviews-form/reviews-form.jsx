import React from "react";
import PropTypes from "prop-types";
import {MIN_LENGTH_COMMENT} from "../../hocs/with-comment/with-comment";

const ReviewsForm = (props) => {

  const {rating, comment, handleFormSubmit, handleFieldChange, isDisabled = true} = props;
  const RATING_VALUES = [5, 4, 3, 2, 1];
  return (
    <form onSubmit={(evt) => handleFormSubmit(evt)} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div name="rating" className="reviews__rating-form form__rating">
        {RATING_VALUES.map((value) =>
          <React.Fragment key={value}>
            <input onChange={(evt) => handleFieldChange(evt)} checked={value === rating} className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio"/>
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={`${value}-stars`}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        )}
      </div>
      <textarea onChange={(evt) => handleFieldChange(evt)}
        className="reviews__textarea form__textarea" id="review" name="comment" value={comment}
        placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and
              describe
              your stay with at least <b className="reviews__text-amount">{MIN_LENGTH_COMMENT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit
        </button>
      </div>
    </form>
  );

};

ReviewsForm.propTypes = {
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  handleFormSubmit: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};

export default ReviewsForm;
