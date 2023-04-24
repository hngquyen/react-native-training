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

export type RentOutInfoType = {
  periodHours: number;
  price: {type: number; name: string; value: number; decimals: number};
  rentBattles: number;
  thcBonus: number;
  winRateTHC: {
    65: number;
  };
};

export type SystemCurrencyType = {
  decimals: number;
  name: string;
  type: number;
  value: number;
};

export type HeroItemType = {
  battleCap: number;
  battleCapMax: number;
  created: string;
  dmg: number;
  heroRarity: number;
  heroRole: number;
  heroTypeId: number;
  hp: number;
  id: string;
  imageAvatar: string;
  imageFull: string;
  lastModified: string;
  level: number;
  marketType: number;
  name: string;
  ownerAddress: string;
  ownerId: string;
  price: number;
  refId: string;
  refType: number;
  rentOutInfo: RentOutInfoType;
  skinId: number;
  skinName: string;
  skinRarity: number;
  status: number;
  systemCurrency: SystemCurrencyType;
  timestamp: string;
  tokenId: string;
  trophyClass: number;
};

export const enum CosmeticType {
  AVATAR = 1,
  AVATAR_FRAME = 2,
  EMOTE = 3,
  SPACESHIP = 4,
}
export type CosmeticItemType = {
  blockchainId: number;
  cosmeticInfo: {status: number; typeId: number; type: number; rarity: number};
  createdAt: string;
  saleInfo: {
    price: {
      decimals: number;
      name: string;
      type: number;
      value: number;
    };
  };
  userAddress: string;
  cosmeticRarity: number;
  cosmeticType: number;
  cosmeticName: string;
  id: string;
  lastModified: string;
  ownerAddress: string;
  refId: string;
  refType: number;
  timestamp: number;
  tokenId: number;
};

export type HomePageData = {
  banners: BannerType[];
  metricStats: MetricStatsType;
  heroRecentlyLists: HeroItemType[];
  cosmeticRecentlyLists: CosmeticItemType[];
};
