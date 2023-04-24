import {HomePageData} from 'src/models';
import {ActionType, DashboardReducer} from './type';

export const dashboardReducer: DashboardReducer = (
  state: HomePageData = {
    banners: [],
    metricStats: {
      listedCount: 0,
      timeout: 0,
      tradedCount: 0,
      transactionRealValue: 0,
    },
    heroRecentlyLists: [],
    cosmeticRecentlyLists: [],
  },
  action,
) => {
  switch (action.type) {
    case ActionType.DASHBOARD_UPDATE_BANNER: {
      return {
        ...state,
        banners: action.payload,
      };
    }
    case ActionType.DASHBOARD_UPDATE_METRIC_STATS: {
      return {
        ...state,
        metricStats: action.payload,
      };
    }
    case ActionType.DASHBOARD_UPDATE_HERO_RECENTLY: {
      return {
        ...state,
        heroRecentlyLists: action.payload,
      };
    }
    default:
      return state;
  }
};
