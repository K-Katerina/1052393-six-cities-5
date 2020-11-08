import React from "react";
import renderer from "react-test-renderer";
import withComment from "./with-comment";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
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

const MockComponentWrapped = withComment(MockComponent);

it(`withComment is render correctly`, () => {
  const store = configureStore()(makeInitialStateMock());

  const tree = renderer.create((
    <Provider store={store}>
      <BrowserRouter>
        <MockComponentWrapped
          postReview={()=>{}}
          id={1}
        >
          <React.Fragment />
        </MockComponentWrapped>
      </BrowserRouter>
    </Provider>
  )).toJSON();
  expect(tree).toMatchSnapshot();
});
