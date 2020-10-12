import React from "react";
import PropTypes from "prop-types";
import {ReviewPropType} from "../../types";
import ReviewsForm from "../reviews-form/reviews-form";
import ListReviews from "../list-reviews/list-reviews";

const Reviews = (props) => {
  const {reviews} = props;
  return (
    <React.Fragment>
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span
          className="reviews__amount">{reviews.length}</span></h2>
        <ul className="reviews__list">
          <ListReviews reviews={reviews}/>
        </ul>
        <ReviewsForm/>
      </section>
    </React.Fragment>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType)
};

export default Reviews;
