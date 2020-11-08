import React from "react";
import renderer from "react-test-renderer";
import FavoritePlaces from "./favorite-places";
import {mockOffer} from "../../const";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";

it(`Should FavoritePlaces render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritePlaces
              offersForLocation={[mockOffer]}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
