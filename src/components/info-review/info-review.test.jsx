import React from "react";
import renderer from "react-test-renderer";
import InfoReview from "./info-review";
import {mockReview} from "../../const";

it(`Should InfoReview render correctly`, () => {
  const tree = renderer
    .create(
        <InfoReview review={mockReview}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
