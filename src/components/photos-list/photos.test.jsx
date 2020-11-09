import React from "react";
import renderer from "react-test-renderer";
import PhotosList from "./photos-list";
import {mockOffer} from "../../const";

it(`Should PhotosList render correctly`, () => {
  const tree = renderer
    .create(
        <PhotosList
          photos={mockOffer.photos}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
