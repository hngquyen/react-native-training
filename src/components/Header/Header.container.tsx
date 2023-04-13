import { View, StyleSheet } from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText.container';

const Header: React.FC = () => {
  return (
    <View style={styles.root}>
      <AppText style={styles.headerText}>Market</AppText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 14,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
});
