import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/utils';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: normalize(16),
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: normalize(8),
  },
  input: {
    width: normalize(64),
    height: normalize(32),
    borderRadius: normalize(6),
    color: 'white',
    backgroundColor: '#000',
    padding: 0,
    fontSize: normalize(14),
    textAlign: 'center',
  },
  totalPage: {
    color: 'white',
    fontSize: normalize(14),
  },
  icArrow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: normalize(32),
    height: normalize(32),
    borderRadius: normalize(6),
    backgroundColor: '#5336D0',
  },
  left: {
    transform: [{rotate: '180deg'}],
  },
});

export default styles;
