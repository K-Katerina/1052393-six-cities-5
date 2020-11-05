export const ActionTypeForProcess = {
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  OPEN_SORT_MENU: `OPEN_SORT_MENU`
};

export const ActionCreatorForProcess = {
  changeActiveOffer: (activeOfferId) => ({
    type: ActionTypeForProcess.CHANGE_ACTIVE_OFFER,
    payload: activeOfferId
  }),
  changeSelectedCity: (selectedCity) => ({
    type: ActionTypeForProcess.CHANGE_SELECTED_CITY,
    payload: selectedCity
  }),
  changeSortType: (sortType) => ({
    type: ActionTypeForProcess.CHANGE_SORT_TYPE,
    payload: sortType
  }),
  openSortMenu: (isOpen) => ({
    type: ActionTypeForProcess.OPEN_SORT_MENU,
    payload: isOpen
  })
};
