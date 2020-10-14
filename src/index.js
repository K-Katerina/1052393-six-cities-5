import React from "react";
import ReactDOM from "react-dom";
import {OFFERS} from "./mocks/offers";
import App from "./components/app/app";

ReactDOM.render(
    <App
      offers={OFFERS}
    />,
    document.querySelector(`#root`)
);
