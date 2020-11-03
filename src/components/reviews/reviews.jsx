import React from "react";
import PropTypes from "prop-types";
import {ReviewPropType} from "../../types";
import ReviewsList from "../reviews-list/reviews-list";
import withComment from "../../hocs/with-comment/with-comment";
import ReviewsForm from "../reviews-form/reviews-form";
import {connect} from "react-redux";
import {getCurrentReviews, isLoggedIn} from "../../store/reducers/selectors";
import {getReviewsByOfferId} from "../../store/api-actions";

const ReviewsFormWrapped = withComment(ReviewsForm);

class Reviews extends React.Component {

  componentDidMount() {
    this.props.getReviews(this.props.id);
  }

  render() {
    const {reviews, loggedIn, id} = this.props;

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span
          className="reviews__amount">{reviews.length}</span></h2>
        <ReviewsList reviews={reviews}/>
        {loggedIn && <ReviewsFormWrapped id={id}/>}
      </section>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewPropType),
  loggedIn: PropTypes.bool,
  getReviews: PropTypes.func,
  id: PropTypes.number
};

const mapStateToProps = (state) => ({
  loggedIn: isLoggedIn(state),
  reviews: getCurrentReviews(state)
});

const mapDispatchToProps = (dispatch) => ({
  getReviews: (id) => dispatch(getReviewsByOfferId(id)),
});

export {Reviews};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
