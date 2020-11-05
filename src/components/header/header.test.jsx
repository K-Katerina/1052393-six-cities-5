import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";

it(`Should Header render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <Header
              loggedIn={false}
              login={``}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
