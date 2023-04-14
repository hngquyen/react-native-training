import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ThetanBox: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>Thetan Box</Text>
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
