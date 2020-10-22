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

export const MAX_NEAR_PLACES = 3;
export const DEFAULT_SORT_TYPE = `POPULAR`;

export const Cities = {
  PARIS: {
    name: `PARIS`,
    coordinates: {
      lat: 48.8534100,
      lng: 2.3488000
    }
  },
  COLOGNE: {
    name: `COLOGNE`,
    coordinates: {
      lat: 50.9333300,
      lng: 6.9500000
    }
  },
  BRUSSELS: {
    name: `BRUSSELS`,
    coordinates: {
      lat: 50.8504500,
      lng: 4.3487800
    }
  },
  AMSTERDAM: {
    name: `AMSTERDAM`,
    coordinates: {
      lat: 52.38333,
      lng: 4.9
    }
  },
  HAMBURG: {
    name: `HAMBURG`,
    coordinates: {
      lat: 53.5753200,
      lng: 10.0153400
    }
  },
  DUSSELDORF: {
    name: `DUSSELDORF`,
    coordinates: {
      lat: 51.2217200,
      lng: 6.7761600
    }
  }
};

export const SortTypes = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  BY_RATING: `Top rated first`
};
