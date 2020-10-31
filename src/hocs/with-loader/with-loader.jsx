import React from "react";
import Loader from "../../components/loader/loader";
import PropTypes from "prop-types";

const withLoader = (Component) => {
  class WithLoader extends React.Component {
    render() {
      return (
        this.props.isLoading ? <Loader/> : <Component {...this.props}/>
      );
    }
  }
  WithLoader.propTypes = {
    isLoading: PropTypes.bool
  };
  return WithLoader;
};

export default withLoader;
