export const ActionType = {
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  OPEN_SORT_MENU: `OPEN_SORT_MENU`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  IS_LOADED_OFFERS: `IS_LOADED_OFFERS`,
  LOGIN: `LOGIN`,
  CHANGE_LOGIN: `CHANGE_LOGIN`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

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
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  isLoadedOffers: (isLoading) => ({
    type: ActionType.IS_LOADED_OFFERS,
    payload: isLoading,
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
  })
};
