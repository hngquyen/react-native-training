import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {homePageData} from './constants';
import Banner from './components/Banner/Banner';

const HomePage = () => {
  return (
    <ScrollView style={styles.root}>
      <Banner data={homePageData.banners} />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
  },
});
