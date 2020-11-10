import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {FavoriteButton} from "./favorite-button";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Click on FavoriteButton`, () => {
  const onButtonClick = jest.fn();

  const wrapper = shallow(
      <FavoriteButton
        isFavorite={true}
        onButtonClick={onButtonClick}
        loggedIn={true}
      />
  );

  wrapper.simulate(`click`);
  expect(onButtonClick).toHaveBeenCalledTimes(1);
});
