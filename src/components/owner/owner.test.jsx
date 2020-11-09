import React from "react";
import renderer from "react-test-renderer";
import Owner from "./owner";
import {mockOffer} from "../../const";

it(`Should Owner render correctly`, () => {
  const tree = renderer
    .create(
        <Owner
          owner={mockOffer.owner}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
