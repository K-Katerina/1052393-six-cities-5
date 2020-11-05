import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "./main-page";
import {mockOffer} from "../../../const";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should MainPage render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
          <BrowserRouter>
            <MainPage
              isEmptyOffers={false}
              offers={[mockOffer]}
              activeOffer={mockOffer}
              getOffers={()=>{}}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
