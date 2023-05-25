import React from 'react';
import {View, StyleSheet} from 'react-native';

import useCountdown from 'src/hooks/useCountdown';
import FlipNumber from './components/FlipNumber/FlipNumber';
import {normalize} from 'src/utils/utils';
import {TimeUnits} from './config';

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
      <FlipNumber
        time={parseTimeToString(countdown.hour)}
        type={TimeUnits.HOUR}
      />
      <FlipNumber
        time={parseTimeToString(countdown.minute)}
        type={TimeUnits.MINUTE}
      />
      <FlipNumber
        time={parseTimeToString(countdown.second)}
        type={TimeUnits.SECOND}
      />
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
