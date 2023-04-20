import {
  BannerType,
  HomePageData,
  MetricStatsType,
  HeroRecentlyType,
} from '~/models';

export type Action =
  | {
      type: ActionType.DASHBOARD_UPDATE_BANNER;
      payload: BannerType[];
    }
  | {
      type: ActionType.DASHBOARD_UPDATE_METRIC_STATS;
      payload: MetricStatsType;
    }
  | {
      type: ActionType.DASHBOARD_UPDATE_HERO_RECENTLY;
      payload: HeroRecentlyType[];
    };

export const enum ActionType {
  DASHBOARD_UPDATE_BANNER = 'DASHBOARD_UPDATE_BANNER',
  DASHBOARD_UPDATE_METRIC_STATS = 'DASHBOARD_UPDATE_METRIC_STATS',
  DASHBOARD_UPDATE_HERO_RECENTLY = 'DASHBOARD_UPDATE_HERO_RECENTLY',
}

export type DashboardReducer = (
  state: HomePageData,
  action: Action,
) => HomePageData;
