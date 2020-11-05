import {appProcess} from "./app-process";
import {Cities, SortTypes} from "../../../const";
import {ActionTypeForProcess} from "./actions";

const state = {
  selectedCity: Cities.PARIS,
  activeOfferId: 1,
  sortType: SortTypes.PRICE_TO_LOW,
  isOpenSortMenu: false,
};

describe(`AppProcess Reducer testing`, () => {

  it(`Test reducer action CHANGE_SELECTED_CITY`, () => {
    const action = {
      type: ActionTypeForProcess.CHANGE_SELECTED_CITY,
      payload: Cities.AMSTERDAM
    };
    expect(appProcess(state, action).selectedCity).toEqual(Cities.AMSTERDAM);
  });

  it(`Test reducer action CHANGE_ACTIVE_OFFER`, () => {
    const action = {
      type: ActionTypeForProcess.CHANGE_ACTIVE_OFFER,
      payload: 12
    };
    expect(appProcess(state, action).activeOfferId).toEqual(12);
  });

  it(`Test reducer action CHANGE_SORT_TYPE`, () => {
    const action = {
      type: ActionTypeForProcess.CHANGE_SORT_TYPE,
      payload: SortTypes.PRICE_TO_LOW
    };
    expect(appProcess(state, action).sortType).toEqual(SortTypes.PRICE_TO_LOW);
  });

  it(`Test reducer action OPEN_SORT_MENU`, () => {
    const action = {
      type: ActionTypeForProcess.OPEN_SORT_MENU,
      payload: true
    };
    expect(appProcess(state, action).isOpenSortMenu).toEqual(true);
  });
});
