import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {HeroItemType} from 'src/models';
import {AppError} from 'src/types';

type HeroRecentlyState = {
  loading: boolean;
  error: AppError;
  data: HeroItemType[];
};

const initialState: HeroRecentlyState = {
  loading: false,
  error: AppError.NO_ERROR,
  data: [],
};

export const heroRecentlySlice = createSlice({
  name: 'heroRecently',
  initialState,
  reducers: {
    fetchData: state => {
      state.loading = true;
    },
    fetchDataSuccess: (
      state,
      action: PayloadAction<{data: HeroItemType[]}>,
    ) => {
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

export const heroRecentlyActions = heroRecentlySlice.actions;

export default heroRecentlySlice.reducer;
