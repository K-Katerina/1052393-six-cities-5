import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {DEFAULT_SORT_TYPE} from "../../const";
import {Sort} from "./sort";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Change sort type`, () => {
  const onChangeSortType = jest.fn();

  const wrapper = shallow(
      <Sort
        sortType={DEFAULT_SORT_TYPE}
        onChangeSortType={onChangeSortType}
        onSortMenuOpen={()=>{}}
      />
  );

  const sortButtons = wrapper.find(`li`);

  sortButtons.forEach((button) => button.simulate(`click`));
  expect(onChangeSortType).toHaveBeenCalledTimes(sortButtons.length);
});

it(`Open sort menu`, () => {
  const onSortMenuOpen = jest.fn();

  const wrapper = shallow(
      <Sort
        sortType={DEFAULT_SORT_TYPE}
        onChangeSortType={()=>{}}
        onSortMenuOpen={onSortMenuOpen}
      />
  );

  const form = wrapper.find(`form`);
  form.simulate(`click`);
  expect(onSortMenuOpen).toHaveBeenCalledTimes(1);
});
