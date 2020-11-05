import React from "react";
import renderer from "react-test-renderer";
import {Cities} from "../../const";
import {OffersContainer} from "./offers-container";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should OffersContainer render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <OffersContainer
              offersCount={5}
              selectedCity={Cities.AMSTERDAM}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
