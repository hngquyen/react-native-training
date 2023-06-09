import {StyleSheet} from 'react-native';
import {normalize} from 'src/utils/utils';

export default StyleSheet.create({
  root: {
    display: 'flex',
    width: '90%',
    position: 'relative',
    left: '5%',
    justifyContent: 'center',
    backgroundColor: '#0C0524',
    borderRadius: normalize(3.47826),
  },
  bgPath: {
    zIndex: 1,
    display: 'flex',
    alignSelf: 'center',
    width: normalize(140),
    aspectRatio: 160 / 77,
  },
  imgPath: {
    position: 'absolute',
    zIndex: 1,
    top: '-35%',
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
  limited: {
    backgroundColor:
      'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(237, 0, 30, 0.31) 82.76%), #000000',
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#ED001E',
  },
});
