import React from "react";
import renderer from "react-test-renderer";
import {mockOffer} from "../../const";
import {BrowserRouter} from "react-router-dom";
import FavoriteCard from "./favorite-card";
import {Provider} from "react-redux";
import {makeInitialStateMock} from "../../utils";
import configureStore from "redux-mock-store";

it(`Should FavoriteCard render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoriteCard
              offer={mockOffer}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
