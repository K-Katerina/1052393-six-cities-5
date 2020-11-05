import React from "react";
import renderer from "react-test-renderer";
import {RoomPage} from "./room-page";
import {mockOffer} from "../../../const";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

it(`Should RoomPage render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={createStore(rootReducer)}>
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
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
