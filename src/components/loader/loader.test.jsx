import React from "react";
import renderer from "react-test-renderer";
import Loader from "./loader";

it(`Should Loader render correctly`, () => {
  const tree = renderer
    .create(
        <Loader/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
