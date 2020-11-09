import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {Cities, mockOffer} from "../../const";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";
import {Provider} from "react-redux";

it(`Should Map render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <Map
            nearPlaces={[mockOffer]}
            selectedCity={Cities.AMSTERDAM}
            activeOffer={mockOffer}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
