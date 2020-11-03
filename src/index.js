import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import App from "./components/app/app";
import rootReducer from "./store/reducers/root-reducer";
import {checkAuth} from "./store/api-actions";
import {redirect} from "./store/middlewares/redirect";

const api = createAPI(() => false);
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        applyMiddleware(redirect),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);

