import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {ReviewPropType} from "../../types";
import ReviewsList from "../reviews-list/reviews-list";
import withComment from "../../hocs/with-comment/with-comment";
import ReviewsForm from "../reviews-form/reviews-form";
import {connect} from "react-redux";
import {getCurrentReviews, isLoadedReviewsById} from "../../store/reducers/app-data/selectors";
import {getReviewsByOfferId} from "../../store/api-actions";
import {isLoggedIn} from "../../store/reducers/user/selectors";
import Loader from "../loader/loader";

const ReviewsFormWrapped = withComment(ReviewsForm);

const Reviews = (props) => {
  const {reviews, loggedIn, id, isLoading, getReviews} = props;

  useEffect(() => {
    getReviews(id);
  }, []);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span
        className="reviews__amount">{reviews ? reviews.length : 0}</span></h2>
      {isLoading ? <Loader/> : <ReviewsList reviews={reviews}/>}
      {loggedIn && <ReviewsFormWrapped id={id}/>}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType),
  loggedIn: PropTypes.bool,
  getReviews: PropTypes.func,
  id: PropTypes.number,
  isLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  reviews: getCurrentReviews(state),
  loggedIn: isLoggedIn(state),
  isLoading: isLoadedReviewsById(state),
});

const mapDispatchToProps = (dispatch) => ({
  getReviews: (id) => dispatch(getReviewsByOfferId(id)),
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
