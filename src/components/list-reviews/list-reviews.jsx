import PropTypes from "prop-types";
import {ReviewPropType} from "../../types";
import {getDate, getRating} from "../../utils";
import React from "react";

const ListReviews = (props) => {
  const {reviews} = props;
  return (
    <React.Fragment>
      {reviews.map((review) =>
        <li key={review.id} className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={review.author.avatar} width="54"
                height="54"
                alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">
              {review.author.name}
            </span>
          </div>
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
        </li>
      )}
    </React.Fragment>
  );
};

ListReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType)
};

export default ListReviews;
