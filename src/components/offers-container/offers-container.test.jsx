import React from "react";
import renderer from "react-test-renderer";
import {Cities} from "../../const";
import {OffersContainer} from "./offers-container";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";

it(`Should OffersContainer render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OffersContainer
              offersCount={5}
              selectedCity={Cities.AMSTERDAM}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
