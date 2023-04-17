import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Banner from './components/Banner/Banner';
import MetricStats from './components/MetricStats/MetricStats';

const HomePage = () => {
  return (
    <ScrollView style={styles.root}>
      <Banner />
      <MetricStats />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    backgroundColor: '#0F0933',
  },
});
