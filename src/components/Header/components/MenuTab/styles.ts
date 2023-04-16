import {StyleSheet} from 'react-native';
import {normalize} from '~/utils/utils';

export default StyleSheet.create({
  root: {
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(20),
    backgroundColor: '#271D61',
  },
  tabItem: {
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(18),
    borderRadius: normalize(4),
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#5336D0',
  },
  textItem: {
    fontWeight: '400',
    fontSize: normalize(14),
  },
  dot: {
    position: 'absolute',

    right: normalize(5),
    top: normalize(5),
    width: normalize(5),
    height: normalize(5),
    borderRadius: normalize(5 / 2),
    backgroundColor: '#10FF00',
  },
  bar: {
    marginHorizontal: normalize(4),
    width: normalize(1),
    height: normalize(15),
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});
