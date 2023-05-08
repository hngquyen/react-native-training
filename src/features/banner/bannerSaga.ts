import {call, put, takeLatest} from 'redux-saga/effects';
import {bannerActions} from './bannerSlice';
import {BannerType} from 'src/models';
import {AppError} from 'src/types';
import {getBanner} from 'src/store/api';

function* fetchBanner() {
  const result: BannerType[] | undefined = yield call(getBanner);

  if (result) {
    yield put(bannerActions.fetchDataSuccess({data: result}));
  } else {
    yield put(bannerActions.fetchDataError({error: AppError.UNKNOWN}));
  }
}

function* bannerSaga() {
  yield takeLatest(bannerActions.fetchData.type, fetchBanner);
}

export default bannerSaga;
