import {StyleSheet} from 'react-native';
import {normalize} from 'src/utils/utils';

export default StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  header: {
    display: 'flex',
    position: 'relative',
    paddingVertical: normalize(4),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  bgImage: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: 50,
    height: 50,
  },
  headerText: {
    color: 'white',
    fontSize: normalize(14),
    fontWeight: '600',
    lineHeight: normalize(24),
  },
  container: {
    display: 'flex',
    gap: normalize(10),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    // height: normalize(244),
    // width: '100%',
    padding: normalize(20),
    paddingTop: normalize(64),
    backgroundColor: '#1B1444',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#795CF5',
  },
  item: {
    display: 'flex',
    alignSelf: 'center',
    width: '50%',
  },
});
