import React from "react";
import renderer from "react-test-renderer";
import rootReducer from "../../store/reducers/root-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {App} from "./app";

it(`Render App`, () => {
  const tree = renderer
      .create(
          <Provider store={createStore(rootReducer)}>
            <BrowserRouter>
              <App
                loggedIn={true}
              />
            </BrowserRouter>
          </Provider>
      )
      .toJSON();
  expect(tree).toMatchSnapshot();
});
