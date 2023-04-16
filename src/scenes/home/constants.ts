export type BannerType = {
  id: number;
  image: string;
};

export type HomePageData = {
  banners: BannerType[];
};

export const homePageData: HomePageData = {
  banners: [
    {
      id: 1,
      image: 'public_assets/mkp/banner/Banner-HeroTrading.png',
    },
    {
      id: 2,
      image: 'public_assets/mkp/banner/Banner_MKPQuest.jpeg',
    },
    {
      id: 3,
      image: 'public_assets/mkp/banner/Banner-WelcomGiftBox.png',
    },
  ],
};
