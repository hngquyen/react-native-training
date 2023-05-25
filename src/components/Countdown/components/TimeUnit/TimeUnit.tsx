import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from 'components/AppText/AppText';
import {normalize} from 'src/utils/utils';

type Props = {
  time: string;
};

const TimeUnit: React.FC<Props> = ({time}) => {
  return (
    <View style={styles.root}>
      <View style={styles.unitContainer}>
        <AppText style={styles.text}>{time[0]}</AppText>
      </View>
      <View style={styles.unitContainer}>
        <AppText style={styles.text}>{time[1]}</AppText>
      </View>
    </View>
  );
};

export default TimeUnit;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: normalize(4),
  },
  unitContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: normalize(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(48),
    height: normalize(60),
  },
  text: {
    fontSize: normalize(32),
    fontWeight: '700',
  },
});
