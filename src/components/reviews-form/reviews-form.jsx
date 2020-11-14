import React, {useState} from "react";
import {extend} from "../../utils";
import {postReviewByOfferId} from "../../store/api-actions";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const ReviewsForm = (props) => {
  const RATING_VALUES = [`5`, `4`, `3`, `2`, `1`];
  const MIN_LENGTH_COMMENT = 50;
  const [comment, setComment] = useState({
    rating: ``,
    review: ``,
  });
  const {rating, review} = comment;

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    if (rating && review) {
      props.postReview({
        comment: review,
        rating
      }, props.id);
      setComment((prevComment) => extend(prevComment, {review: ``, rating: ``}));
    }
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setComment((prevComment) => extend(prevComment, {[name]: value}));
  };

  const isSubmitButtonDisabled = () => {
    return !rating || review.length < MIN_LENGTH_COMMENT;
  };

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
        className="reviews__textarea form__textarea" id="review" name="review" value={review}
        placeholder="Tell how was your stay, what you like and what can be improved"/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and
              describe
              your stay with at least <b className="reviews__text-amount">{MIN_LENGTH_COMMENT} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled()}>Submit
        </button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  postReview: PropTypes.func,
  id: PropTypes.number.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  postReview: (review, id) => dispatch(postReviewByOfferId(review, id)),
});

export {ReviewsForm};
export default connect(null, mapDispatchToProps)(ReviewsForm);
