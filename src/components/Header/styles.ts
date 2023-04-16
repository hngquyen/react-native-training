import {StyleSheet} from 'react-native';
import {normalize} from '~/utils/utils';

export default StyleSheet.create({
  root: {
    paddingVertical: normalize(14),
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    lineHeight: normalize(24),
    textAlign: 'center',
  },
});
