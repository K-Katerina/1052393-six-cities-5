import React from "react";
import renderer from "react-test-renderer";
import {mockOffer} from "../../const";
import {NearPlaces} from "./near-places";

it(`Should NearPlaces render correctly`, () => {
  const tree = renderer
    .create(
        <NearPlaces
          nearPlaces={[mockOffer]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
