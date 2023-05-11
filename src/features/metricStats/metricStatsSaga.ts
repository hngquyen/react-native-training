import {call, put, takeLatest} from 'redux-saga/effects';
import {MetricStatsType} from 'src/models';
import {AppError} from 'src/types';
import {getMetricStats} from 'src/store/api';
import {GroupCount} from 'src/scenes/home/components/MetricStats/constants';
import {PayloadAction} from '@reduxjs/toolkit';
import {metricStatsActions} from './metricStatsSlice';

function* fetchMetricStats(action: PayloadAction<GroupCount>) {
  const result: MetricStatsType | undefined = yield call(
    getMetricStats,
    action.payload,
  );

  if (result) {
    yield put(metricStatsActions.fetchDataSuccess({data: result}));
  } else {
    yield put(metricStatsActions.fetchDataError({error: AppError.UNKNOWN}));
  }
}

function* metricStatsSaga() {
  yield takeLatest(metricStatsActions.fetchData.type, fetchMetricStats);
}

export default metricStatsSaga;
