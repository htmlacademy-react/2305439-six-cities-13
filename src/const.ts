import { typeCityOffer } from './types/type_offers';

const STARTS_COUNT = 5;

const AppRoute = {
  Main : '/',
  Login : '/login',
  Favorites : '/favorites',
  Offer : '/offer',
} as const;


enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const BlockName = {
  AllPages: 'cities',
  AllPagesList: 'cities__places-list',
  Offer: 'offer',
  NearOfferList: 'near-places__list',
  NearOffer: 'near-places',
} as const;

const TIMEOUT_SHOW_ERROR = 2000;


const CITIES_LOCATION : typeCityOffer[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.5112,
      longitude: 2.2055,
      zoom: 8
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.9375,
      longitude: 6.9603,
      zoom: 8
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.8503,
      longitude: 4.3517,
      zoom: 8
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.2226,
      longitude: 4.5322,
      zoom: 8
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.5511,
      longitude: 9.9937,
      zoom: 8
    }
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.2277,
      longitude: 6.7735,
      zoom: 8
    }
  },
];

const SortOffersType = {
  Popular : 'Popular',
  PriceToHigh : 'Price: low to high',
  PriceToLow : 'Price: high to low',
  TopRated : 'Top rated first',
};

const APIRoute = {
  Offers : '/offers',
  Login : '/login',
  Logout : '/logout',
};
const URL_MARKER_DEFAULT = 'img/pin.svg';

const URL_MARKER_CURRENT = 'img/pin-active.svg';
export { AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, BlockName, STARTS_COUNT, CITIES_LOCATION, SortOffersType, APIRoute, TIMEOUT_SHOW_ERROR };
