import React from "react";
import renderer from "react-test-renderer";
import {DEFAULT_SORT_TYPE} from "../../const";
import {Sort} from "./sort";

it(`Should Sort render correctly`, () => {
  const tree = renderer
    .create(
        <Sort
          sortType={DEFAULT_SORT_TYPE}
          onSortTypeChanged={()=>{}}
          changeSortType={()=>{}}
          openSortMenu={()=>{}}
          isOpenedSortMenu={false}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
