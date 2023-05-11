import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import bannerSlice from 'src/features/banner/bannerSlice';
import metricStatsSlice from 'src/features/metricStats/metricStatsSlice';
import heroRecentlySlice from 'src/features/heroRecently/heroRecentlySlice';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    banner: bannerSlice,
    metricsStats: metricStatsSlice,
    heroRecently: heroRecentlySlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
