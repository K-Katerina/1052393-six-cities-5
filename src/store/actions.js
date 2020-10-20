import {OFFERS} from "../mocks/offers";

export const ActionType = {
  CHANGE_ACTIVE_OFFER: `CHANGE_ACTIVE_OFFER`,
  CHANGE_SELECTED_CITY: `CHANGE_SELECTED_CITY`,
  CHANGE_OFFERS: `CHANGE_OFFERS`
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
  changeOffer: () => {
    // логика по получению офферов в выбранном городе
    return {
      type: ActionType.CHANGE_OFFERS,
      payload: OFFERS
    };
  },
};
