import React from "react";
import renderer from "react-test-renderer";
import {RoomPage} from "./room-page";
import {mockOffer} from "../../../const";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../../utils";
import thunk from "redux-thunk";

it(`Should RoomPage render correctly`, () => {
  const store = configureStore([thunk])(makeInitialStateMock());

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <RoomPage
              activeOffer={mockOffer}
              nearPlaces={[mockOffer]}
              isLoading={false}
              id={1}
              getOffer={()=>{}}
              getNearPlacesByOfferId={()=>{}}
            />
          </BrowserRouter>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
