export const HousingType = {
  APARTMENT: `Apartment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`
};

export const TypeCards = {
  FAVORITES: `FAVORITES`,
  NEAR_PLACES: `NEAR_PLACES`,
  CITIES: `CITIES`
};

export const getStyleForCard = (cardType) => {
  switch (cardType) {
    case TypeCards.CITIES:
      return {
        className: `cities`,
        width: 260,
        height: 200
      };
    case TypeCards.NEAR_PLACES:
      return {
        className: `near-places`,
        width: 260,
        height: 200
      };
    case TypeCards.FAVORITES:
      return {
        className: `favorites`,
        width: 150,
        height: 110
      };
    default:
      return new Error(`Type "${cardType}" not found`);
  }
};
