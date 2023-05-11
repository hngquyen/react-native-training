import {StyleSheet} from 'react-native';
import {normalize} from 'src/utils/utils';

export default StyleSheet.create({
  root: {
    display: 'flex',
    marginHorizontal: normalize(20),
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: normalize(8),
  },
  headerText: {
    fontWeight: '700',
    fontSize: normalize(16),
    lineHeight: normalize(22),
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
  },
  tabContainer: {
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(9),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: normalize(8),
    borderBottomWidth: normalize(4),
    borderBottomColor: 'transparent',
  },
  active: {
    borderBottomColor: '#5336D0',
  },
  iconTab: {
    width: normalize(16),
    height: normalize(16),
  },
  tabText: {
    fontWeight: '600',
    fontSize: normalize(14),
    lineHeight: normalize(24),
  },
  content: {
    marginTop: normalize(19),
  },
  viewMore: {
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(8),
    backgroundColor: '#5336D0',
    width: normalize(217),
    alignSelf: 'center',
    borderRadius: normalize(4),
    marginTop: normalize(24),
  },
  viewMoreText: {
    fontWeight: '600',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    textAlign: 'center',
  },
});
