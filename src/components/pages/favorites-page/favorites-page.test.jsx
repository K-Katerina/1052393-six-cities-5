import React from "react";
import renderer from "react-test-renderer";
import FavoritesPage from "./favorites-page";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../../utils";
import thunk from "redux-thunk";
import {createAPI} from "../../../services/api";

it(`Should FavoritesPage render correctly`, () => {
  const store = configureStore([thunk.withExtraArgument(createAPI(() => false))])(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesPage
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
