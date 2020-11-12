import React from "react";
import renderer from "react-test-renderer";
import {FavoriteList} from "./favorite-list";
import {mockOffer} from "../../const";

it(`Should FavoriteList render correctly`, () => {
  const map = new Map();
  map[`Amsterdam`] = [mockOffer];
  const tree = renderer
    .create(
        <FavoriteList
          favorites={map}
          loadFavorites={()=>{}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
