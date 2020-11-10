import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";
import {mockOffer} from "../../const";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`OfferCard mouse enter`, () => {
  const onChangeActiveOffer = jest.fn();

  const wrapper = shallow(
      <OfferCard
        offer={mockOffer}
        onChangeActiveOffer={onChangeActiveOffer}
      />
  );

  const article = wrapper.find(`article`);

  article.simulate(`mouseenter`, {
    preventDefault: ()=>{},
  });
  expect(onChangeActiveOffer).toHaveBeenCalledTimes(1);
});

it(`OfferCard mouse leave`, () => {
  const onChangeActiveOffer = jest.fn();

  const wrapper = shallow(
      <OfferCard
        offer={mockOffer}
        onChangeActiveOffer={onChangeActiveOffer}
      />
  );

  const article = wrapper.find(`article`);

  article.simulate(`mouseleave`, {
    preventDefault: ()=>{},
  });
  expect(onChangeActiveOffer).toHaveBeenCalledTimes(1);
});
