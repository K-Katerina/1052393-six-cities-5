import React from "react";
import renderer from "react-test-renderer";
import {mockOffer} from "../../const";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import NearPlacesCard from "./near-place-card";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";

it(`Should NearPlacesCard render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <NearPlacesCard
              offer={mockOffer}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
