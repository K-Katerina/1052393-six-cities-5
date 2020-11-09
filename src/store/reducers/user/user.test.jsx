import {ActionTypeForUser} from "./actions";
import {user} from "./user";

const state = {
  login: `null@mail.ru`,
  loggedIn: true
};

describe(`User Reducer testing`, () => {

  it(`Test reducer action CHANGE_LOGIN`, () => {
    const action = {
      type: ActionTypeForUser.CHANGE_LOGIN,
      payload: `not_null@mail.ru`
    };
    expect(user(state, action).login).toEqual(`not_null@mail.ru`);
  });

  it(`Test reducer action LOGIN`, () => {
    const action = {
      type: ActionTypeForUser.LOGIN,
      payload: false
    };
    expect(user(state, action).loggedIn).toEqual(false);
  });
});
