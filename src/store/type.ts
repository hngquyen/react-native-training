import {BannerType, HomePageData} from '~/models';

export type Action = {
  type: ActionType.DASHBOARD_UPDATE_BANNER;
  payload: BannerType[];
};

export const enum ActionType {
  DASHBOARD_UPDATE_BANNER = 'DASHBOARD_UPDATE_BANNER',
}

export type DashboardReducer = (
  state: HomePageData,
  action: Action,
) => HomePageData;
