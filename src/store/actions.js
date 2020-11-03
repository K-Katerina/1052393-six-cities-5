export const ActionType = {
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  OPEN_SORT_MENU: `OPEN_SORT_MENU`,

  LOGIN: `LOGIN`,
  CHANGE_LOGIN: `CHANGE_LOGIN`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,

  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_OFFER_BY_ID: `GET_OFFER_BY_ID`,
  IS_LOADED_OFFER_BY_ID: `IS_LOADED_OFFER_BY_ID`,

  GET_REVIEWS_BY_OFFER_ID: `GET_REVIEWS_BY_OFFER_ID`,
  GET_NEAR_PLACES_BY_OFFER_ID: `GET_NEAR_PLACES_BY_OFFER_ID`
};
// TODO Как видидшь количество actions неустанно растёт, потому лучше разделять их между файлами в reduceрах
export const ActionCreator = {
  changeActiveOffer: (activeOfferId) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: activeOfferId
  }),
  changeSelectedCity: (selectedCity) => ({
    type: ActionType.CHANGE_SELECTED_CITY,
    payload: selectedCity
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  openSortMenu: (isOpen) => ({
    type: ActionType.OPEN_SORT_MENU,
    payload: isOpen
  }),

  loggedIn: (loggedIn) => ({
    type: ActionType.LOGIN,
    payload: loggedIn,
  }),
  changeLogin: (login) => ({
    type: ActionType.CHANGE_LOGIN,
    payload: login,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOfferById: (offer) => ({
    type: ActionType.GET_OFFER_BY_ID,
    payload: offer,
  }),
  isLoadedOfferById: (isLoading) => ({
    type: ActionType.IS_LOADED_OFFER_BY_ID,
    payload: isLoading,
  }),

  loadReviewsByOfferId: (reviews) => ({
    type: ActionType.GET_REVIEWS_BY_OFFER_ID,
    payload: reviews,
  }),
  loadNearPlacesByOfferId: (offers) => ({
    type: ActionType.GET_NEAR_PLACES_BY_OFFER_ID,
    payload: offers,
  })
};
