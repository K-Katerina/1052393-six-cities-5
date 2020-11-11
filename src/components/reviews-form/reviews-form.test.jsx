import React from "react";
import renderer from "react-test-renderer";
import ReviewsForm from "./reviews-form";

it(`Should ReviewsForm render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewsForm
          rating={5}
          comment={``}
          isDisabled={false}
          onSubmit={()=>{}}
          onFieldChange={()=>{}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
