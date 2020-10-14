import React from "react";
import PropTypes from "prop-types";
import {ReviewPropType} from "../../types";
import ReviewsList from "../reviews-list/reviews-list";
import ReviewsForm from "../reviews-form/reviews-form";

const Reviews = (props) => {
  const {reviews} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span
        className="reviews__amount">{reviews.length}</span></h2>
      <ReviewsList reviews={reviews}/>
      <ReviewsForm/>
    </section>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType)
};

export default Reviews;
