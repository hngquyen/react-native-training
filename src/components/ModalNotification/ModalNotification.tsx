import {DeviceEventEmitter, StyleSheet, View} from 'react-native';
import React from 'react';
import {AppError, ShowModalEmitterType} from './constants';
import {formatErrorMessage} from './utils';
import AppText from 'components/AppText/AppText';
import {normalize} from 'src/utils/utils';

const ModalNotification = () => {
  const [showModal, setShowModal] = React.useState(true);
  const [state, setState] = React.useState<ShowModalEmitterType>();
  React.useEffect(() => {
    const showModalEmitter = DeviceEventEmitter.addListener(
      'showModal',
      (value: ShowModalEmitterType) => {
        setState(value);
        setShowModal(true);
      },
    );
    return () => showModalEmitter.remove();
  }, []);

  React.useEffect(() => {
    let timer: number;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 1500);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showModal]);
  if (!showModal) {
    return null;
  }
  return (
    <View style={[styles.root, showModal ? styles.show : styles.hide]}>
      <View style={styles.container}>
        <AppText style={styles.message}>
          {formatErrorMessage(state?.code)}
        </AppText>
      </View>
      <View
        style={[
          styles.footer,
          state?.code !== AppError.NO_ERROR ? styles.red : styles.green,
        ]}
      />
    </View>
  );
};

export default ModalNotification;

const styles = StyleSheet.create({
  root: {
    zIndex: 10,

    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
  },
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: normalize(48),
    paddingVertical: normalize(32),
    borderRadius: normalize(12),
  },
  footer: {
    height: normalize(8),
    width: '80%',
    borderBottomLeftRadius: normalize(16),
    borderBottomLRightRadius: normalize(16),
  },
  message: {
    color: '#000',
    fontWeight: '600',
    fontSize: normalize(16),
  },
  red: {
    backgroundColor: 'red',
  },
  green: {
    backgroundColor: 'green',
  },
});
