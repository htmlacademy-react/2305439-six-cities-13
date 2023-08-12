const Setting = {
  RentalOffersCount : 312,
} as const;

const AppRoute = {
  Main : '/',
  Login : '/login',
  Favorites : '/favorites',
  Offer : '/offer',
} as const;

const AuthorizationStatus = {
  Auth : 'AUTH',
  NoAuth : 'NO_AUTH',
  Unknown : 'UNKNOWN',
} as const;

const BlockName = {
  AllPages: 'cities',
  AllPagesList: 'cities__places-list',
  Offer: 'offer',
  NearOfferList: 'near-places__list',
  NearOffer: 'near-places',
} as const;

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export { Setting, AppRoute, AuthorizationStatus, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, BlockName };
