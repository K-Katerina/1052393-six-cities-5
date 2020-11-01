import {ActionCreator} from "./actions";
import {adaptToClient} from "../utils";
import {AppRoute} from "../const";

export const getOffers = () => (dispatch, _getState, api) =>
  api.get(`/hotels`)
  .then(({data}) => data.map((it) => adaptToClient(it)))
  .then((offers) => {
    dispatch(ActionCreator.loadOffers(offers));
    dispatch(ActionCreator.isLoadedOffers(false));
  });


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.loggedIn(true));
      dispatch(ActionCreator.changeLogin(response.data.email));
    })
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.loggedIn(true)))
    .then(() => dispatch(ActionCreator.changeLogin(email)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.FAVORITES)))
);
