import {BannerType, HeroItemType} from 'src/models';
import {GroupCount} from 'src/screens/market/home/components/MetricStats/constants';
import {callApi} from 'src/utils/fetch';

export const getBanner = async () => {
  const response = await callApi<{listBanner: BannerType[]}>(
    'https://data.thetanarena.com/thetan/v1/mkpdashboard/banner/getlist',
  );

  if (response.data) {
    return response.data.listBanner;
  }
  //   const response = await axiosDefault<BannerType>({
  //     url: 'https://data.thetanarena.com/theta/v1/mkpdashboard/banner/getlist',
  //   });
  // if (response.data && !response.status) {
  //   return response.data.listBanner;
  // }
  return undefined;
};

export const getHeroRecently = async () => {
  const response = await callApi<{listItem: HeroItemType}>(
    'https://data.thetanarena.com/thetan/v1/mkpdashboard/hero/getrecentlylisted?size=10',
  );

  if (response.data) {
    return response.data.listItem;
  }
  return undefined;
};

export const getMetricStats = async (filterKey: GroupCount) => {
  const response = await callApi<{
    metricStats: {
      listedCount: 0;
      timeout: 0;
      tradedCount: 0;
      transactionRealValue: 0;
    };
  }>(
    `https://data.thetanarena.com/thetan/v1/mkpdashboard/metric/getmetricstats?groupCount=${filterKey}`,
  );

  if (response.data) {
    return response.data;
  }
  return undefined;
};
