import React from "react";
import renderer from "react-test-renderer";
import {Reviews} from "./reviews";
import {mockReview} from "../../const";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should Reviews render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
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
