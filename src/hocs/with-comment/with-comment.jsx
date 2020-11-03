import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {postReviewByOfferId} from "../../store/api-actions";

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        rating: 0,
        comment: ``,
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(evt) {
      evt.preventDefault();
      const {rating, comment} = this.state;
      if (rating && comment) {
        this.props.postReview({
          comment,
          rating
        }, this.props.id);
        this.setState({rating: 0});
        this.setState({comment: ``});
      }
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {rating, comment} = this.state;
      return (
        <Component
          {...this.props}
          rating={Number(rating)}
          comment={comment}
          isDisabled={true} // TODO
          handleFormSubmit={this.handleFormSubmit}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  WithComment.propTypes = {
    postReview: PropTypes.func,
    id: PropTypes.number
  };

  const mapDispatchToProps = (dispatch) => ({
    postReview: (review, id) => dispatch(postReviewByOfferId(review, id)),
  });

  return connect(null, mapDispatchToProps)(WithComment);
};

export default withComment;
