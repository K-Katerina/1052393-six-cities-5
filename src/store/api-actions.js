import {ActionCreatorForData} from "./reducers/app-data/actions";
import {offerAdaptToClient, reviewAdaptToClient} from "../utils";
import {ActionCreatorForUser} from "./reducers/user/actions";
import {AppRoute} from "../const";
import history from "../history";

export const getOffers = () => (dispatch, _getState, api) =>
  api.get(`/hotels`)
  .then(({data}) => data.map((it) => offerAdaptToClient(it)))
  .then((offers = []) => dispatch(ActionCreatorForData.loadOffers(offers)));

export const getOfferById = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreatorForData.isLoadedOfferById(true));
  api.get(`/hotels/${id}`)
    .then(({data}) => offerAdaptToClient(data))
    .then((offer) => dispatch(ActionCreatorForData.loadOfferById(offer)))
    .then(() => dispatch(ActionCreatorForData.isLoadedOfferById(false)));
};

export const getReviewsByOfferId = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreatorForData.isLoadedReviewsById(true));
  if (api) {
    api.get(`/comments/${id}`)
      .then(({data}) => data.map((it) => reviewAdaptToClient(it)))
      .then((reviews) => {
        dispatch(ActionCreatorForData.loadReviewsByOfferId(reviews));
        dispatch(ActionCreatorForData.isLoadedReviewsById(false));
      });
  }
};

export const postReviewByOfferId = ({comment, rating}, id) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {comment, rating})
    .then(({data}) => data.map((it) => reviewAdaptToClient(it)))
    .then((reviews) => dispatch(ActionCreatorForData.loadReviewsByOfferId(reviews)))
    .catch((err) => {
      throw err;
    })
);

export const getNearPlacesByOfferId = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => data.map((it) => offerAdaptToClient(it)))
    .then((offers = []) => dispatch(ActionCreatorForData.loadNearPlacesByOfferId(offers)));
};

export const getFavorites = () => (dispatch, _getState, api) => {
  api.get(`/favorite`)
    .then(({data}) => data.map((it) => offerAdaptToClient(it)))
    .then((offers = []) => dispatch(ActionCreatorForData.loadFavorites(offers)));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreatorForUser.loggedIn(true));
      dispatch(ActionCreatorForUser.changeLogin(response.data.email));
    })
    .catch((err) => {
      throw err;
    })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => {
      dispatch(ActionCreatorForUser.loggedIn(true));
      dispatch(ActionCreatorForUser.changeLogin(email));
    })
    .catch((err) => {
      throw err;
    })
);

export const updateFavorite = (offerId, status) => (dispatch, _getState, api) => (
  api.post(`/favorite/${offerId}/${status}`)
    .then(({data}) => offerAdaptToClient(data))
    .then((offer) => dispatch(ActionCreatorForData.updateFavorite(offer)))
    .catch(() => history.push(AppRoute.LOGIN))
);
