import {View} from 'react-native';
import React from 'react';
import AppText from '../AppText/AppText';
import styles from './styles';

const Header: React.FC = () => {
  return (
    <>
      <View style={styles.root}>
        <AppText style={styles.headerText}>Market</AppText>
      </View>
    </>
  );
};

export default Header;
