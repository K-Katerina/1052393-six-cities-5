import {ActionCreator} from "./actions";
import {offerAdaptToClient, reviewAdaptToClient} from "../utils";
import {AppRoute} from "../const";

export const getOffers = () => (dispatch, _getState, api) =>
  api.get(`/hotels`)
  .then(({data}) => data.map((it) => offerAdaptToClient(it)))
  .then((offers) => {
    dispatch(ActionCreator.loadOffers(offers));
    dispatch(ActionCreator.isLoadedOffers(false));
  });

export const getOfferById = (id) => (dispatch, _getState, api) =>{
  dispatch(ActionCreator.isLoadedOfferById(true));
  api.get(`/hotels/${id}`)
    .then(({data}) => offerAdaptToClient(data))
    .then((offer) => {
      dispatch(ActionCreator.loadOfferById(offer));
      dispatch(ActionCreator.isLoadedOfferById(false));
    });
};

export const getReviewsByOfferId = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
    .then(({data}) => data.map((it) => reviewAdaptToClient(it)))
    .then((reviews) => {
      dispatch(ActionCreator.loadReviewsByOfferId(reviews));
    });
};

export const getNearPlacesByOfferId = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => data.map((it) => offerAdaptToClient(it)))
    .then((offers) => {
      dispatch(ActionCreator.loadNearPlacesByOfferId(offers));
    });
};

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

export const postReviewByOfferId = ({comment, rating}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
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
