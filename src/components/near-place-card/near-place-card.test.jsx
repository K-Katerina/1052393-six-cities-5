import React from "react";
import renderer from "react-test-renderer";
import {mockOffer} from "../../const";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";
import NearPlacesCard from "./near-place-card";

it(`Should NearPlacesCard render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
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
