import {
  BannerType,
  HomePageData,
  MetricStatsType,
  HeroItemType,
  CosmeticItemType,
} from 'src/models';

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
      payload: HeroItemType[];
    }
  | {
      type: ActionType.DASHBOARD_UPDATE_COSMETIC_RECENTLY;
      payload: CosmeticItemType[];
    };

export const enum ActionType {
  DASHBOARD_UPDATE_BANNER = 'DASHBOARD_UPDATE_BANNER',
  DASHBOARD_UPDATE_METRIC_STATS = 'DASHBOARD_UPDATE_METRIC_STATS',
  DASHBOARD_UPDATE_HERO_RECENTLY = 'DASHBOARD_UPDATE_HERO_RECENTLY',
  DASHBOARD_UPDATE_COSMETIC_RECENTLY = 'DASHBOARD_UPDATE_COSMETIC_RECENTLY',
}

export type DashboardReducer = (
  state: HomePageData,
  action: Action,
) => HomePageData;
