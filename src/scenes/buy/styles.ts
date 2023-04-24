import {StyleSheet} from 'react-native';
import {normalize} from 'src/utils/utils';

export default StyleSheet.create({
  root: {
    display: 'flex',
    backgroundColor: '#0F0933',
  },
  container: {
    width: '100%',
    marginHorizontal: normalize(20),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(16),
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: normalize(15),
  },
  category: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    paddingHorizontal: normalize(50),
    paddingVertical: normalize(9),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: normalize(8),
    marginBottom: normalize(22),
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
  filterContainer: {
    alignSelf: 'center',
    marginTop: normalize(60),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5336D0',
    flexDirection: 'row',
    borderRadius: normalize(4),
  },
  filterItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: normalize(4),
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(8),
    borderLeftColor: 'rgba(255, 255, 255, 0.1)',
    borderLeftWidth: 1,
    borderStyle: 'solid',
  },
});
