import React from "react";
import PropTypes from "prop-types";
import {ReviewPropType} from "../../types";
import ReviewsList from "../reviews-list/reviews-list";
import withComment from "../../hocs/with-comment/with-comment";
import ReviewsForm from "../reviews-form/reviews-form";
import {connect} from "react-redux";
import {isLoggedIn} from "../../store/reducers/selectors";

const ReviewsFormWrapped = withComment(ReviewsForm);

const Reviews = (props) => {
  const {reviews, loggedIn} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span
        className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      {loggedIn ?
        <ReviewsFormWrapped/> : ``}
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType),
  loggedIn: PropTypes.bool
};

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state),
});

export {Reviews};
export default connect(mapStateToProps)(Reviews);
