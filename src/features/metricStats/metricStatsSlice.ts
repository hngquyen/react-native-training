import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {MetricStatsType} from 'src/models';
import {GroupCount} from 'src/scenes/home/components/MetricStats/constants';
import {AppError} from 'src/types';

type BannerState = {
  loading: boolean;
  error: AppError;
  data: MetricStatsType;
};

const initialState: BannerState = {
  loading: false,
  error: AppError.NO_ERROR,
  data: {
    listedCount: 0,
    timeout: 0,
    tradedCount: 0,
    transactionRealValue: 0,
  },
};

export const metricStatsSlice = createSlice({
  name: 'metricStats',
  initialState,
  reducers: {
    fetchData: (state, _action: PayloadAction<GroupCount>) => {
      state.loading = true;
    },
    fetchDataSuccess: (
      state,
      action: PayloadAction<{data: MetricStatsType}>,
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

export const metricStatsActions = metricStatsSlice.actions;

export default metricStatsSlice.reducer;
