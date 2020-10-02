import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENTAL_OFFER_COUNT: 6
};

ReactDOM.render(
    <App
      rentalOfferCount={Settings.RENTAL_OFFER_COUNT}
    />,
    document.querySelector(`#root`)
);
