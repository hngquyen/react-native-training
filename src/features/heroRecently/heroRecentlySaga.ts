import {call, put, takeLatest} from 'redux-saga/effects';
import {HeroItemType} from 'src/models';
import {AppError} from 'src/types';
import {getHeroRecently} from 'src/store/api';
import {heroRecentlyActions} from './heroRecentlySlice';

function* fetchHeroRecently() {
  const result: HeroItemType[] | undefined = yield call(getHeroRecently);

  if (result) {
    yield put(heroRecentlyActions.fetchDataSuccess({data: result}));
  } else {
    yield put(heroRecentlyActions.fetchDataError({error: AppError.UNKNOWN}));
  }
}

function* heroRecentlySaga() {
  yield takeLatest(heroRecentlyActions.fetchData.type, fetchHeroRecently);
}

export default heroRecentlySaga;
