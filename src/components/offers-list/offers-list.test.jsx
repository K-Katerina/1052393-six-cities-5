import React from "react";
import renderer from "react-test-renderer";
import {OffersList} from "./offers-list";
import {mockOffer} from "../../const";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should OffersList render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <OffersList
              sortOffers={[mockOffer]}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
