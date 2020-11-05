import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {Cities, mockOffer} from "../../const";

it(`Should Map render correctly`, () => {
  const tree = renderer
    .create(
        <Map
          nearPlaces={[mockOffer]}
          selectedCity={Cities.PARIS}
          activeOffer={mockOffer}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
