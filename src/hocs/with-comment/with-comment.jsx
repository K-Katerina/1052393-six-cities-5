import React, {PureComponent} from "react";

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        review: ``,
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    handleFormSubmit(evt) {
      evt.preventDefault();
      const {rating, review} = this.state;
      if (rating && review) {
        // submit
        // console.log(rating, review);
        this.setState({rating: 0});
        this.setState({review: ``});
      }
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({[name]: value});
    }

    render() {
      const {rating, review} = this.state;
      return (
        <Component
          {...this.props}
          rating={Number(rating)}
          review={review}
          handleFormSubmit={this.handleFormSubmit}
          handleFieldChange={this.handleFieldChange}
        />
      );
    }
  }

  return WithComment;
};

export default withComment;
