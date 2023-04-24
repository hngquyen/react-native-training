import {icCosmetic, icHero} from 'src/assets/img';

export const enum RecentlyTab {
  HERO = 'hero',
  COSMETIC = 'cosmetic',
}

export const categoryMap = [
  {
    id: RecentlyTab.HERO,
    title: 'Heroes',
    img: icHero,
  },
  {
    id: RecentlyTab.COSMETIC,
    title: 'Cosmetic',
    img: icCosmetic,
  },
];
