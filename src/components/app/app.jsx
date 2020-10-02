import React from "react";
import PropTypes from "prop-types";
import Main from "../main/main";


const App = (props) => {
  const {rentalOfferCount} = props;
  return (
    <Main
      rentalOfferCount={rentalOfferCount}
    />
  );
};

App.propTypes = {
  rentalOfferCount: PropTypes.number.isRequired,
};

export default App;
