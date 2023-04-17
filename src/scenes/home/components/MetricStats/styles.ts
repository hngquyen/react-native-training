import {StyleSheet} from 'react-native';
import {normalize} from '~/utils/utils';

export default StyleSheet.create({
  root: {
    marginTop: normalize(16),
    display: 'flex',
    flexDirection: 'column',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: normalize(4),
    backgroundColor: '#200E5B',
  },
  header: {
    marginTop: normalize(16),
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  wrapText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(9),
    borderBottomWidth: normalize(4),
    borderStyle: 'solid',
    borderColor: 'transparent',
  },
  headerLabel: {
    textAlign: 'center',
    color: '#CFCED6',
    fontSize: normalize(14),
    lineHeight: normalize(24),
    fontWeight: '600',
  },
  active: {
    borderColor: '#795cf5',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: normalize(8),
    paddingHorizontal: normalize(16),
    paddingVertical: normalize(24),
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: normalize(16),
  },
  icon: {
    width: normalize(40),
    height: normalize(40),
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    gap: normalize(4),
  },
  wrapLabel: {
    display: 'flex',
  },
  label: {
    fontSize: normalize(12),
    lineHeight: normalize(20),
    textAlign: 'center',
    fontWeight: '400',
    color: '#C4B7FC',
  },
  value: {
    color: '#fff',
    fontSize: normalize(16),
    lineHeight: normalize(24),
    fontWeight: '600',
  },
});
