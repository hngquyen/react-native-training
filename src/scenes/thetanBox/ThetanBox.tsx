import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import GiftBox from './components/GiftBox/GiftBox';
import SystemBox from './components/SystemBox/SystemBox';
import {thetanBoxData} from './constants';

const ThetanBox: React.FC = () => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Thetan box contains various heroes with certain drop rates.{'\n'} The
          higher quality of the Thetan box is, the higher the drop rate for the
          high-quality Heroes is.
        </Text>
      </View>
      <GiftBox data={thetanBoxData.giftBox} />
      <SystemBox data={thetanBoxData.systemBox} />
    </ScrollView>
  );
};

export default ThetanBox;
