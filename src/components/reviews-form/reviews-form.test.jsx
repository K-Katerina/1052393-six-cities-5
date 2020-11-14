import React from "react";
import renderer from "react-test-renderer";
import {ReviewsForm} from "./reviews-form";

it(`Should ReviewsForm render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsForm
          id={1}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
