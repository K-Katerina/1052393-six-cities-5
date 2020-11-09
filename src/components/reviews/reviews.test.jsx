import React from "react";
import renderer from "react-test-renderer";
import {Reviews} from "./reviews";
import {mockReview} from "../../const";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";

it(`Should Reviews render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Reviews
              reviews={[mockReview]}
              loggedIn={true}
              getReviews={()=>{}}
              id={1}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
