import React from "react";
import renderer from "react-test-renderer";
import AuthorReview from "./author-review";

it(`Should AuthorReview render correctly`, () => {
  const tree = renderer
    .create(
        <AuthorReview
          author={{
            id: 43,
            avatar: `http://picsum.photos/74/74?r=123}`,
            name: `Sun-43`
          }}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
