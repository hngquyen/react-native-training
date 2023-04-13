import React from 'react';
import { View, StyleSheet } from 'react-native';
import MenuTab from './components/MenuTab/MenuTab.container';

const ThetanBox: React.FC = () => {
  return (
    <View style={styles.root}>
      <MenuTab />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default ThetanBox;
