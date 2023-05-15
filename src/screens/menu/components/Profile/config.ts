import {ImageSourcePropType} from 'react-native';

const icVestingSafe = require('../../../../../assets/img/ic_vestingSafe.png');
const icCreateCorner = require('../../../../../assets/img/ic_createCorner.png');
const icConversion = require('../../../../../assets/img/ic_conversion.png');
const icStaking = require('../../../../../assets/img/ic_staking.png');

type TabContainerType = {
  icon: ImageSourcePropType;
  title: string;
  key: string;
};

export const tabContainerMap: TabContainerType[] = [
  {
    icon: icVestingSafe,
    title: 'Inventory',
    key: 'Inventory',
  },
  {
    icon: icCreateCorner,
    title: 'Wallet',
    key: 'Wallet',
  },
  {
    icon: icConversion,
    title: 'Battle Reward',
    key: 'BattleReward',
  },
  {
    icon: icStaking,
    title: 'Referral Friend',
    key: 'ReferralFriend',
  },
  {
    icon: icStaking,
    title: 'History',
    key: 'History',
  },
  {
    icon: icStaking,
    title: 'Account Setting',
    key: 'AccountSetting',
  },
];
