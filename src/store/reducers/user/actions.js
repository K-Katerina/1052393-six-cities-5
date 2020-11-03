export const ActionTypeForUser = {
  LOGIN: `LOGIN`,
  CHANGE_LOGIN: `CHANGE_LOGIN`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`
};

export const ActionCreatorForUser = {
  loggedIn: (loggedIn) => ({
    type: ActionTypeForUser.LOGIN,
    payload: loggedIn,
  }),
  changeLogin: (login) => ({
    type: ActionTypeForUser.CHANGE_LOGIN,
    payload: login,
  }),
  redirectToRoute: (url) => ({
    type: ActionTypeForUser.REDIRECT_TO_ROUTE,
    payload: url,
  })
};
