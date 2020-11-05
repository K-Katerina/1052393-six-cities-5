import React from "react";
import renderer from "react-test-renderer";
import FavoritesPage from "./favorites-page";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should FavoritesPage render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <FavoritesPage/>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
