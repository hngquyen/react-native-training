import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Banner from './components/Banner/Banner';
import MetricStats from './components/MetricStats/MetricStats';
import RecentlyList from './components/RecentlyList/RecentlyList';

const HomePage: React.FC = () => {
  return (
    <View style={{flex: 1, display: 'flex'}}>
      <ScrollView style={styles.root}>
        <Banner />
        <MetricStats />
        <RecentlyList />
      </ScrollView>
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
