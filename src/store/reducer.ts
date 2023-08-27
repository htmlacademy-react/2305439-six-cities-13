import { createReducer } from '@reduxjs/toolkit';
import { getCity } from '../utils/utils';
import { changeCity, offersCityList, fullOffersList, reviewsList, setError, setOffersDataLoadingStatus } from './action';
import { CITIES_LOCATION } from '../const';
import { typeCityOffer, typeOffer, typeOffersList } from '../types/type_offers';
import { typeReviews } from '../types/type_reviews';


type typeInitialState = {
  city: typeCityOffer | undefined;
  offers: typeOffersList[];
  fullOffers: typeOffer[];
  reviews: typeReviews[];
  error: string | null;
  isOffersDataLoading: boolean;
}

const defaultCity = getCity('Paris', CITIES_LOCATION);

const initialState : typeInitialState = {
  city: defaultCity,
  offers: [],
  fullOffers: [],
  reviews: [],
  error: null,
  isOffersDataLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(fullOffersList, (state, action) => {
      state.fullOffers = action.payload;
    })
    .addCase(reviewsList, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
