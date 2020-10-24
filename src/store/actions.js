export const ActionType = {
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  OPEN_SORT_MENU: `OPEN_SORT_MENU`
};

export const ActionCreator = {
  changeActiveOffer: (activeOffer) => ({
    type: ActionType.CHANGE_ACTIVE_OFFER,
    payload: activeOffer
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
  })
};
