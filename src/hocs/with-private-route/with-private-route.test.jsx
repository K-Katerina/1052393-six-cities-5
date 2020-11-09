import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {withPrivateRoute} from "./with-private-route";
import configureStore from "redux-mock-store";
import {makeInitialStateMock} from "../../utils";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const MockComponentWrapped = withPrivateRoute(MockComponent);

it(`withPrivateRoute is render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer.create((
    <Provider store={store}>
      <BrowserRouter>
        <MockComponentWrapped
          loggedIn={true}
        >
          <React.Fragment />
        </MockComponentWrapped>
      </BrowserRouter>
    </Provider>
  )).toJSON();
  expect(tree).toMatchSnapshot();
});
