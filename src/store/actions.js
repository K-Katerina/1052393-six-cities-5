export const ActionType = {
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
};

export const ActionCreator = {
  changeActiveOffer: (activeOffer) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: activeOffer
  }),
  changeSelectedCity: (selectedCity) => ({
    type: ActionType.CHANGE_SELECTED_CITY,
    payload: selectedCity
  })
};
