import { createReducer } from '@reduxjs/toolkit';
import { getCity } from '../utils/utils';
import { changeCity, offersCityList } from './action';
import { CITIES_LOCATION } from '../const';
import mockOffersList from '../mocks/mock_offers-list';

const defaultCity = getCity('Paris', CITIES_LOCATION);

const initialState = {
  city: defaultCity,
  offers: mockOffersList,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersCityList, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};