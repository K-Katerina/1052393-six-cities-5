import PropTypes from "prop-types";
import {ReviewPropType} from "../../types";
import React from "react";
import AuthorReview from "../author-review/author-review";
import InfoReview from "../info-review/info-review";

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <li key={review.id} className="reviews__item">
          <AuthorReview author={review.author}/>
          <InfoReview review={review}/>
        </li>
      )}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType)
};

export default ReviewsList;
