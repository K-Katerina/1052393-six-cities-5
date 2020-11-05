import React from "react";
import renderer from "react-test-renderer";
import Footer from "./footer";
import rootReducer from "../../store/reducers/root-reducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

it(`Should Footer render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <Footer/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
