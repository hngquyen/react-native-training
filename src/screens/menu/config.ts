import {ImageSourcePropType} from 'react-native';

const icVestingSafe = require('../../../assets/img/ic_vestingSafe.png');
const icCreateCorner = require('../../../assets/img/ic_createCorner.png');
const icConversion = require('../../../assets/img/ic_conversion.png');
const icStaking = require('../../../assets/img/ic_staking.png');

type TabContainerType = {
  icon: ImageSourcePropType;
  title: string;
  key: string;
};

export const tabContainerMap: TabContainerType[] = [
  {
    icon: icVestingSafe,
    title: 'Vesting Safe',
    key: 'VestingSafe',
  },
  {
    icon: icCreateCorner,
    title: 'Creator Corner',
    key: 'CreatorCorner',
  },
  {
    icon: icConversion,
    title: 'Conversion Program',
    key: 'ConversionProgram',
  },
  {
    icon: icStaking,
    title: 'Staking',
    key: 'Staking',
  },
  {
    icon: icStaking,
    title: 'Information & Support',
    key: 'InfomationAndSupport',
  },
];
