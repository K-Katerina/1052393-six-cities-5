import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import {mockOffer, TypeCards} from "../../const";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <OfferCard
              changeActiveOffer={()=>{}}
              offer={mockOffer}
              typeCard={TypeCards.FAVORITES}
              loggedIn={true}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
