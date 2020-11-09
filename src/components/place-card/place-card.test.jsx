import React from "react";
import renderer from "react-test-renderer";
import {mockOffer} from "../../const";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import PlaceCard from "./place-card";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";

it(`Should PlaceCard render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <PlaceCard
              offer={mockOffer}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
