import {icCategoryTab} from 'src/assets/img';

export const enum BuyTab {
  HERO = 'hero',
  COSMETIC = 'cosmetics',
}

export const categoryMap = [
  {
    id: BuyTab.HERO,
    title: 'Heroes',
    img: icCategoryTab,
  },
  {
    id: BuyTab.COSMETIC,
    title: 'Cosmetic',
    img: icCategoryTab,
  },
];
