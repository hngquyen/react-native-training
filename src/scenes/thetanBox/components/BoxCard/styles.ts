import {normalize} from '~/utils/utils';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  root: {
    display: 'flex',
    width: '90%',
    position: 'relative',
    left: '5%',
    justifyContent: 'center',
    backgroundColor: '#0C0524',
    borderRadius: normalize(3.47826),
    marginTop: normalize(32),
  },
  bgPath: {
    zIndex: 1,
    display: 'flex',
    alignSelf: 'center',
    width: normalize(130),
    aspectRatio: 160 / 77,
  },
  imgPath: {
    position: 'absolute',
    zIndex: 1,
    top: '-45%',
    left: '-10%',
    width: normalize(150),
    height: normalize(120),
  },
  content: {
    display: 'flex',
    marginTop: normalize(13),
    paddingLeft: normalize(8),
    marginBottom: normalize(4),
  },
  header: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: normalize(12),
    lineHeight: normalize(15),
  },
  remain: {
    color: '#C6C9DC',
    fontSize: normalize(8),
    lineHeight: normalize(10),
  },
  amount: {
    color: '#FFB800',
  },
  free: {
    backgroundColor: '#FFBA16',
    width: '105%',
    display: 'flex',
    alignSelf: 'center',
    marginBottom: normalize(24),
  },
  freeText: {
    color: '#000',
    fontWeight: '700',
    fontSize: normalize(12),
    lineHeight: normalize(15),
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});
