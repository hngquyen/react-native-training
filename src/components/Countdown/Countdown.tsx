import React from 'react';
import {View, StyleSheet} from 'react-native';

import useCountdown from 'src/hooks/useCountdown';
import TimeUnit from './components/TimeUnit/TimeUnit';
import {normalize} from 'src/utils/utils';

const Countdown = () => {
  const epochTime = 1695003310;
  const countdown = useCountdown(epochTime);

  const parseTimeToString = (time: number): string => {
    if (time < 10) {
      return '0' + time;
    }
    return time.toString();
  };
  return (
    <View style={styles.root}>
      {/* <TimeUnit time={parseTimeToString(countdown.year)} />
      <TimeUnit time={parseTimeToString(countdown.month)} /> */}
      {/* <TimeUnit time={parseTimeToString(countdown.day)} /> */}
      <TimeUnit time={parseTimeToString(countdown.hour)} />
      <TimeUnit time={parseTimeToString(countdown.minute)} />
      <TimeUnit time={parseTimeToString(countdown.second)} />
    </View>
  );
};

export default Countdown;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: normalize(12),
    padding: normalize(12),
  },
});
