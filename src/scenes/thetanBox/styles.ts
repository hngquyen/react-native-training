import {StyleSheet} from 'react-native';
import {normalize} from '~/utils/utils';

export default StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: normalize(12),
    // alignItems: 'center',
    backgroundColor: '#0F0933',
    width: '100%',
  },
  header: {
    display: 'flex',
    marginHorizontal: normalize(17.5),
  },
  headerText: {
    color: '#CFCED6',
    fontSize: normalize(12),
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: normalize(20),
  },
});
