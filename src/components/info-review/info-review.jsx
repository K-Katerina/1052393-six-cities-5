import React from "react";
import {ReviewPropType} from "../../types";
import {getDate, getRating} from "../../utils";

const InfoReview = (props) => {
  const {review} = props;
  return (
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: getRating(review.rating)}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={review.date}>{getDate(review.date)}</time>
    </div>
  );
};

InfoReview.propTypes = {
  review: ReviewPropType
};

export default InfoReview;
