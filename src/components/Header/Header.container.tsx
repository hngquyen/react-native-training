import {View, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText.container';
import {normalize} from '../../utils/utils';
import MenuTab from './components/MenuTab/MenuTab.container';

const Header: React.FC = () => {
  return (
    <View style={styles.root}>
      <AppText style={styles.headerText}>Market</AppText>
      <MenuTab />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    paddingVertical: normalize(14),
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: normalize(18),
    lineHeight: normalize(24),
    textAlign: 'center',
  },
});
