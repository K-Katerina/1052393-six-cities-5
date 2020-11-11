import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {Locations} from "./locations";
import {Cities} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click on city`, () => {
  const onChangeSelectedCity = jest.fn();

  const wrapper = shallow(
      <Locations
        onChangeSelectedCity={onChangeSelectedCity}
        selectedCity={Object.keys(Cities)[0]} />
  );

  const buttons = wrapper.find(`.tabs__item`);

  buttons.forEach((button) => button.simulate(`click`));
  expect(onChangeSelectedCity).toHaveBeenCalledTimes(buttons.length);
});
