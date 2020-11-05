import React from "react";
import renderer from "react-test-renderer";
import {SignInPage} from "./sign-in-page";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should SignInPage render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <SignInPage
              onSubmit={()=>{}}
              loggedIn={true}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
