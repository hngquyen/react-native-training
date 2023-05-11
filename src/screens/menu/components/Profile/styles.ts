import {StyleSheet} from 'react-native';
import {normalize} from 'src/utils/utils';

export default StyleSheet.create({
  root: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#0F0933',
  },
  headerContainer: {
    height: normalize(232),
    width: '100%',
    backgroundColor: '#5336D0',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    gap: normalize(14),
  },
  hexagonOne: {
    position: 'absolute',
    left: normalize(-67),
    top: normalize(59),
    width: normalize(240),
    height: normalize(240),
    opacity: 0.1,
  },
  hexagonTwo: {
    position: 'absolute',
    left: normalize(272),
    top: normalize(0),
    width: normalize(133),
    height: normalize(133),
    opacity: 0.1,
  },
  avatar: {
    width: normalize(114),
    height: normalize(114),
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    gap: normalize(4),
  },
  name: {
    textAlign: 'center',
    fontSize: normalize(16),
    lineHeight: normalize(22),
    fontWeight: '700',
    color: '#fff',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: normalize(6),
  },
  userId: {
    fontWeight: '400',
    fontSize: normalize(14),
    lineHeight: normalize(20),
    color: '#fff',
  },
  copy: {
    width: normalize(24),
    height: normalize(24),
  },
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
  arrow: {},
});
