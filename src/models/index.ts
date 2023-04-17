export type BannerType = {
  bgImageDesktop: string;
  bgImageMobile: string;
  ctaLink: string;
  displayFrom: string;
  displayTo: string;
  format: number;
  sortOrder: number;
  status: number;
};

export type MetricStatsType = {
  listedCount: number;
  timeout: number;
  tradedCount: number;
  transactionRealValue: number;
};

export type HomePageData = {
  banners: BannerType[];
  metricStats: MetricStatsType;
};
