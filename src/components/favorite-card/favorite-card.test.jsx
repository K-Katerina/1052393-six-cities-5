import React from "react";
import renderer from "react-test-renderer";
import FavoriteCard from "./favorite-card";
import {mockOffer} from "../../const";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should FavoriteCard render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
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
