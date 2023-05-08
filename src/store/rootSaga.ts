import {all} from 'redux-saga/effects';
import bannerSaga from 'src/features/banner/bannerSaga';
import heroRecentlySaga from 'src/features/heroRecently/heroRecentlySaga';
import metricStatsSaga from 'src/features/metricStats/metricStatsSaga';

export default function* rootSaga() {
  yield all([bannerSaga(), metricStatsSaga(), heroRecentlySaga()]);
}
