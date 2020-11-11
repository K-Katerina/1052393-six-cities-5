import React from "react";
import renderer from "react-test-renderer";
import {Locations} from "./locations";
import {Cities} from "../../const";

it(`Should Locations render correctly`, () => {
  const tree = renderer
    .create(
        <Locations
          selectedCity={Cities.PARIS}
          onChangeSelectedCity={()=>{}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
