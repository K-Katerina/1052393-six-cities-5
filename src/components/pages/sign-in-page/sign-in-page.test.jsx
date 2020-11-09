import React from "react";
import renderer from "react-test-renderer";
import {SignInPage} from "./sign-in-page";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../../utils";
import {Provider} from "react-redux";

it(`Should SignInPage render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
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
