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
          handleFormSubmit={()=>{}}
          handleFieldChange={()=>{}}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
