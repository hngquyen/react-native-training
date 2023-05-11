import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {BannerType} from 'src/models';
import {AppError} from 'src/types';

type BannerState = {
  loading: boolean;
  error: AppError;
  data: BannerType[];
};

const initialState: BannerState = {
  loading: false,
  error: AppError.NO_ERROR,
  data: [],
};

export const bannerSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    fetchData: state => {
      state.loading = true;
    },
    fetchDataSuccess: (state, action: PayloadAction<{data: BannerType[]}>) => {
      state.loading = false;
      state.error = AppError.NO_ERROR;
      state.data = action.payload.data;
    },
    fetchDataError: (state, action: PayloadAction<{error: AppError}>) => {
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const bannerActions = bannerSlice.actions;

export default bannerSlice.reducer;
