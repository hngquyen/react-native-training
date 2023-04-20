import {DeviceEventEmitter, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {normalize} from '~/utils/utils';

const ModalNotification = () => {
  const [showModal, setShowModal] = React.useState(false);
  React.useEffect(() => {
    const showModalEmitter = DeviceEventEmitter.addListener('showModal', () => {
      setShowModal(true);
    });
    return () => showModalEmitter.remove();
  }, []);

  React.useEffect(() => {
    let timer: number;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 2000);
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
      <Text>ModalNotification</Text>
    </View>
  );
};

export default ModalNotification;

const styles = StyleSheet.create({
  root: {
    zIndex: 10,
    padding: normalize(24),
    backgroundColor: 'red',
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
});
