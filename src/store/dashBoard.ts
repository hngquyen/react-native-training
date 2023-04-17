import {HomePageData} from '~/models';
import {ActionType, DashboardReducer} from './type';

export const dashboardReducer: DashboardReducer = (
  state: HomePageData = {
    banners: [],
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
    default:
      return state;
  }
};
