import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/type_state';
import { typeOffersList } from '../types/type_offers';
import { offersCityList, setError, setOffersDataLoadingStatus} from './action';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { store } from './';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const { data } = await api.get<typeOffersList[]>(APIRoute.Offers);
    dispatch(setOffersDataLoadingStatus(false));
    dispatch(offersCityList(data));
  },
);
