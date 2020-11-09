import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import {mockOffer} from "../../const";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";

it(`Should OfferCard render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <OfferCard
              changeActiveOffer={()=>{}}
              offer={mockOffer}
              isFavorite={true}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
