import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewsForm} from "./reviews-form";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should submit review`, () => {
  const onSubmit = jest.fn();

  const wrapper = shallow(
      <ReviewsForm
        id={3}
        postReview={onSubmit}
      />
  );

  const form = wrapper.find(`form`);

  form.simulate(`submit`, {
    preventDefault: onSubmit,
  });
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
