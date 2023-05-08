import {StyleSheet, View} from 'react-native';
import React from 'react';
import Banner from './components/Banner/Banner';
import MetricStats from './components/MetricStats/MetricStats';
import RecentlyList from './components/RecentlyList/RecentlyList';

const HomePage = () => {
  return (
    <View style={styles.root}>
      <Banner />
      <MetricStats />
      <RecentlyList />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    backgroundColor: '#0F0933',
  },
});
