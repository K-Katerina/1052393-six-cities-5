import React from "react";
import renderer from "react-test-renderer";
import {OfferCard} from "./offer-card";
import {mockOffer, TypeCards} from "../../const";
import {BrowserRouter} from "react-router-dom";

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <OfferCard
            changeActiveOffer={()=>{}}
            offer={mockOffer}
            typeCard={TypeCards.FAVORITES}
            loggedIn={true}
            isFavorite={true}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
