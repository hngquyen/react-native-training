import {StyleSheet, View} from 'react-native';
import React from 'react';
import {normalize} from 'src/utils/utils';
import NumberCard from '../NumberCard/NumberCard';
import {TimeUnits} from 'components/Countdown/config';

type Props = {
  time: string;
  type: TimeUnits;
};

const FlipNumber: React.FC<Props> = ({time, type}) => {
  //   const animatedStyle = useAnimatedStyle(() => {
  //     return {
  //       transform: [{rotateZ: `${rotation.value}deg`}],
  //     };
  //   });

  return (
    <View style={styles.root}>
      <NumberCard number={Number(time[0])} type={type} />
      <NumberCard number={Number(time[1])} type={type} />
    </View>
  );
};

export default FlipNumber;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: normalize(4),
  },
});
