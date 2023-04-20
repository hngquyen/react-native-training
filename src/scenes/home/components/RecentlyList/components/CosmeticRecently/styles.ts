import {StyleSheet} from 'react-native';
import {normalize} from '~/utils/utils';

export default StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: normalize(15),
  },
});
