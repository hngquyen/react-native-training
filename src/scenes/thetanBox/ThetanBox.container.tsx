import React from 'react';
import {View, StyleSheet} from 'react-native';

const ThetanBox: React.FC = () => {
  return <View style={styles.root}>Thetan Box</View>;
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default ThetanBox;
