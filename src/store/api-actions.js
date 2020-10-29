import {ActionCreator} from "./actions";
import {adaptToClient} from "../utils";

export const getOffers = () => (dispatch, _getState, api) =>
  api.get(`/hotels`)
  .then(({data}) => data.map((it) => adaptToClient(it)))
  .then((offers) => dispatch(ActionCreator.loadOffers(offers)));
