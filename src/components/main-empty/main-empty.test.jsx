import React from "react";
import renderer from "react-test-renderer";
import {MainEmpty} from "./main-empty";
import {Cities} from "../../const";

it(`Should MainEmpty render correctly`, () => {
  const tree = renderer
    .create(
        <MainEmpty
          selectedCity={Object.keys(Cities)[2]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
