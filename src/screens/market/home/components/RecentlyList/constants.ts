export const enum RecentlyTab {
  HERO = 'hero',
  COSMETIC = 'cosmetic',
}

export const categoryMap = [
  {
    id: RecentlyTab.HERO,
    title: 'Heroes',
    img: require('../../../../../../assets/img/ic_hero.png'),
  },
  {
    id: RecentlyTab.COSMETIC,
    title: 'Cosmetic',
    img: require('../../../../../../assets/img/ic_cosmetic.png'),
  },
];
