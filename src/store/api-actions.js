import {ActionCreator} from "./actions";
import {adaptToClient} from "../utils";

export const getOffers = () => (dispatch, _getState, api) =>
  api.get(`/hotels`)
  .then(({data}) => data.map((it) => adaptToClient(it)))
  .then((offers) => {
    dispatch(ActionCreator.loadOffers(offers));
    dispatch(ActionCreator.isLoadedOffers(false));
  });


export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.loggedIn(false))) // TODO временно
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.loggedIn(true)))
    .then(() => dispatch(ActionCreator.changeLogin(email)))
);
