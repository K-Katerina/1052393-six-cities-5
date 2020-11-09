import React from "react";
import renderer from "react-test-renderer";
import {mockOffer} from "../../const";
import InfoProperty from "./info-property";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";
import {createAPI} from "../../services/api";

it(`Should InfoProperty render correctly`, () => {
  const store = configureStore([thunk.withExtraArgument(createAPI(() => false))])(makeInitialStateMock());
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <InfoProperty
              offer={mockOffer}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
