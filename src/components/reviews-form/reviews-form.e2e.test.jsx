import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReviewsForm from "./reviews-form";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should submit review`, () => {
  const handleFormSubmit = jest.fn();

  const wrapper = shallow(
      <ReviewsForm
        rating={3}
        comment={`Submit`}
        handleFormSubmit={handleFormSubmit}
        handleFieldChange={()=>{}}
      />
  );

  const form = wrapper.find(`form`);

  form.simulate(`submit`, {
    preventDefault: handleFormSubmit,
  });
  expect(handleFormSubmit).toHaveBeenCalledTimes(1);
});
