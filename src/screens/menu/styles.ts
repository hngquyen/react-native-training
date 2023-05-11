import {StyleSheet} from 'react-native';
import {normalize} from 'src/utils/utils';

export default StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#0F0933',
    flexDirection: 'column',
    gap: normalize(12),
  },
  profileContainer: {
    backgroundColor: '#1B1444',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(8),
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(8),
  },
  avatar: {
    width: normalize(50),
    height: normalize(50),
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: normalize(6),
  },
  name: {
    color: '#fff',
    fontSize: normalize(14),
    lineHeight: normalize(20),
    fontWeight: '700',
  },
  subInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: normalize(6),
  },
  metamask: {},
  userId: {},
  copy: {},
  arrow: {},
  tabContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  tabContent: {
    backgroundColor: '#1B1444',

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(20),
    paddingVertical: normalize(18),
    borderBottomColor: 'rgba(255,255,255, 0.1)',
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
  tab: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: normalize(8),
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
  },
  title: {
    fontWeight: '400',
    fontSize: normalize(14),
    lineHeight: normalize(20),
  },
});
