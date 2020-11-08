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

export const AppRoute = {
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  OFFER: `/offer/:id`,
  ROOT: `/`,
};

export const DEFAULT_SORT_TYPE = `POPULAR`;

export const Cities = {
  PARIS: `PARIS`,
  COLOGNE: `COLOGNE`,
  BRUSSELS: `BRUSSELS`,
  AMSTERDAM: `AMSTERDAM`,
  HAMBURG: `HAMBURG`,
  DUSSELDORF: `DUSSELDORF`
};

export const SortTypes = {
  POPULAR: `Popular`,
  PRICE_TO_HIGH: `Price: low to high`,
  PRICE_TO_LOW: `Price: high to low`,
  BY_RATING: `Top rated first`
};

export const mockOffer = {
  id: 13,
  cityName: Cities.AMSTERDAM,
  coordinatesCity: {
    lat: 52.3909553943508,
    lng: 4.85309666406198,
    zoom: 12
  },
  coordinates: {
    lat: 52.3909553943508,
    lng: 4.85309666406398,
    zoom: 12
  },
  title: `Beautiful & luxurious studio at great location`,
  preview: `http://picsum.photos/248/152?r=123`,
  photos: [`http://picsum.photos/248/152?r=123}`],
  desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!`,
  isPremium: true,
  rating: 4.3,
  type: HousingType.APARTMENT.toLowerCase(),
  bedroomsCount: 2,
  maxGuests: 1,
  costPerNight: 100,
  features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
  isFavorite: true,
  owner:
  {
    id: 373,
    avatar: `http://picsum.photos/74/74?r=123}`,
    name: `Onik_373`,
    isSuper: false
  }
};

export const mockReview = {
  id: 37,
  author: {
    id: 43,
    avatar: `http://picsum.photos/74/74?r=123}`,
    name: `Sun-43`
  },
  rating: 5,
  date: new Date(`2020-11-04T21:00:00.000Z`),
  comment: `Dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora...`
};
