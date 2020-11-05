export const ActionTypeForData = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  GET_OFFER_BY_ID: `GET_OFFER_BY_ID`,
  IS_LOADED_OFFER_BY_ID: `IS_LOADED_OFFER_BY_ID`,

  GET_REVIEWS_BY_OFFER_ID: `GET_REVIEWS_BY_OFFER_ID`,
  GET_NEAR_PLACES_BY_OFFER_ID: `GET_NEAR_PLACES_BY_OFFER_ID`,
  GET_FAVORITES: `GET_FAVORITES`,
  UPDATE_FAVORITE: `UPDATE_FAVORITE`
};

export const ActionCreatorForData = {
  loadOffers: (offers) => ({
    type: ActionTypeForData.LOAD_OFFERS,
    payload: offers,
  }),
  loadOfferById: (offer) => ({
    type: ActionTypeForData.GET_OFFER_BY_ID,
    payload: offer,
  }),
  isLoadedOfferById: (isLoading) => ({
    type: ActionTypeForData.IS_LOADED_OFFER_BY_ID,
    payload: isLoading,
  }),
  loadReviewsByOfferId: (reviews) => ({
    type: ActionTypeForData.GET_REVIEWS_BY_OFFER_ID,
    payload: reviews,
  }),
  loadNearPlacesByOfferId: (offers) => ({
    type: ActionTypeForData.GET_NEAR_PLACES_BY_OFFER_ID,
    payload: offers,
  }),
  loadFavorites: (offers) => ({
    type: ActionTypeForData.GET_FAVORITES,
    payload: offers,
  }),
  updateFavorite: (offer) => ({
    type: ActionTypeForData.UPDATE_FAVORITE,
    payload: offer
  })
};
