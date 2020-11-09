import React from "react";
import renderer from "react-test-renderer";
import {FavoriteButton} from "./favorite-button";

it(`Should FavoriteButton render correctly`, () => {

  const tree = renderer
    .create(
        <FavoriteButton
          className={``}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
