import {HousingType} from "../const";

export const OFFERS = [
  {
    id: 13,
    location: `Amsterdam`,
    title: `Beautiful & luxurious studio at great location`,
    preview: `http://picsum.photos/248/152?r=${Math.random()}`,
    photos: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!`,
    isPremium: true,
    rating: 4.3,
    type: HousingType.APARTMENT,
    bedroomsCount: 2,
    maxGuests: 1,
    costPerNight: 100,
    features: [`Wifi`, `Heating`, `Kitchen`, `Cable TV`],
    isFavorite: true,
    owner:
    {
      id: 373,
      avatar: `http://picsum.photos/74/74?r=${Math.random()}`,
      name: `Onik_373`,
      isSuper: false
    },
    reviews: [{
      id: 32,
      author: {
        id: 32,
        avatar: `http://picsum.photos/74/74?r=${Math.random()}`,
        name: `Nuw-32`
      },
      rating: 3,
      date: new Date(),
      comment: `Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum!`
    },
    {
      id: 37,
      author: {
        id: 43,
        avatar: `http://picsum.photos/74/74?r=${Math.random()}`,
        name: `Sun-43`
      },
      rating: 5,
      date: new Date(),
      comment: `Dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora...`
    }]
  },
  {
    id: 17,
    location: `Amsterdam`,
    title: `Studio at great location`,
    preview: `http://picsum.photos/248/152?r=${Math.random()}`,
    photos: [],
    desc: `Adipisicing minus molestiae vel beatae natus eveniet ratione temporibus aperus!`,
    isPremium: false,
    rating: 2.7,
    type: HousingType.ROOM,
    bedroomsCount: 4,
    maxGuests: 2,
    costPerNight: 30,
    features: [`Kitchen`, `Cable TV`],
    isFavorite: true,
    owner:
      {
        id: 783,
        avatar: `http://picsum.photos/74/74?r=${Math.random()}`,
        name: `Alex_783`,
        isSuper: false
      },
    reviews: [{
      id: 76,
      author: {
        id: 76,
        avatar: `http://picsum.photos/74/74?r=${Math.random()}`,
        name: `Tuefer-76`
      },
      rating: 2,
      date: new Date(),
      comment: `Corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam.`
    }]
  },
  {
    id: 18,
    location: `Hamburg`,
    title: `Norm`,
    preview: `http://picsum.photos/248/152?r=${Math.random()}`,
    photos: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    desc: `Milestiae vel beatae!`,
    isPremium: true,
    rating: 4,
    type: HousingType.HOTEL,
    bedroomsCount: 10,
    maxGuests: 12,
    costPerNight: 123,
    features: [],
    isFavorite: true,
    owner:
      {
        id: 833,
        avatar: `http://picsum.photos/74/74?r=${Math.random()}`,
        name: `Eva_833`,
        isSuper: false
      },
    reviews: []
  }
];