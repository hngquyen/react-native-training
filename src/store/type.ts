import {BannerType, HomePageData, MetricStatsType} from '~/models';

export type Action =
  | {
      type: ActionType.DASHBOARD_UPDATE_BANNER;
      payload: BannerType[];
    }
  | {
      type: ActionType.DASHBOARD_UPDATE_METRIC_STATS;
      payload: MetricStatsType;
    };

export const enum ActionType {
  DASHBOARD_UPDATE_BANNER = 'DASHBOARD_UPDATE_BANNER',
  DASHBOARD_UPDATE_METRIC_STATS = 'DASHBOARD_UPDATE_METRIC_STATS',
}

export type DashboardReducer = (
  state: HomePageData,
  action: Action,
) => HomePageData;
