export type GiftBoxType = {
  name: string;
  bgPath: string;
  ribbonPath: string;
  imgPath: string;
  amount: number;
  isLimited: boolean;
  openTime?: number;
};

export type SystemBoxType = {
  name: string;
  bgPath: string;
  ribbonPath: string;
  imgPath: string;
  amount: number;
  systemPrice: {
    name: string;
    value: number;
  };
};

export type ThetanBoxType = {
  giftBox: GiftBoxType[];
  systemBox: SystemBoxType[];
};
export const thetanBoxData: ThetanBoxType = {
  giftBox: [
    {
      name: 'Gift Box',
      bgPath: 'thetanbox/bg_12.png',
      ribbonPath: 'thetanbox/ribbon_12.png',
      imgPath: 'thetanbox/box_12.png',
      amount: 1,
      isLimited: false,
    },
    {
      name: 'House',
      bgPath: 'thetanbox/bg_16.png',
      ribbonPath: 'thetanbox/ribbon_16.png',
      imgPath: 'thetanbox/box_16.png',
      amount: 1,
      isLimited: true,
      openTime: 86400,
    },
  ],
  systemBox: [
    {
      name: 'Cosmetic Box',
      bgPath: 'thetanbox/bg_7.png',
      ribbonPath: 'thetanbox/ribbon_7.png',
      imgPath: 'thetanbox/box_7.png',
      amount: 1,
      systemPrice: {
        name: 'THC',
        value: 500,
      },
    },
    {
      name: 'Legendary Box',
      bgPath: 'thetanbox/bg_3.png',
      ribbonPath: 'thetanbox/ribbon_3.png',
      imgPath: 'thetanbox/box_3.png',
      amount: 1,
      systemPrice: {
        name: 'THG',
        value: 145,
      },
    },
    {
      name: 'Epic Box',
      bgPath: 'thetanbox/bg_2.png',
      ribbonPath: 'thetanbox/ribbon_2.png',
      imgPath: 'thetanbox/box_2.png',
      amount: 1,
      systemPrice: {
        name: 'THC',
        value: 2200,
      },
    },
    {
      name: 'Common Box',
      bgPath: 'thetanbox/bg_1.png',
      ribbonPath: 'thetanbox/ribbon_1.png',
      imgPath: 'thetanbox/box_1.png',
      amount: 1,
      systemPrice: {
        name: 'THC',
        value: 1000,
      },
    },
  ],
};
