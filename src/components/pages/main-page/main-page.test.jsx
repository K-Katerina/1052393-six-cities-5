import React from "react";
import renderer from "react-test-renderer";
import {MainPage} from "./main-page";
import {mockOffer} from "../../../const";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../../utils";

it(`Should MainPage render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainPage
              isEmptyOffers={false}
              offers={[mockOffer]}
              activeOffer={mockOffer}
              getOffers={()=>{}}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
