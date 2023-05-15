import {StyleSheet} from 'react-native';
import {normalize} from 'src/utils/utils';

export default StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  container: {
    display: 'flex',
    gap: normalize(10),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: normalize(20),
    paddingTop: normalize(64),
  },
  item: {
    display: 'flex',
    alignSelf: 'center',
    width: '48%',
  },
});
