import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";
import {mockReview} from "../../const";

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsList
          reviews={[mockReview]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
