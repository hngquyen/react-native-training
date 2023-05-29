import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppText from 'components/AppText/AppText';
import {normalize} from 'src/utils/utils';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TimeUnits} from 'components/Countdown/config';

type Props = {
  number: number;
  type: TimeUnits;
};

const NumberCard: React.FC<Props> = ({number}) => {
  const rotateFront = useSharedValue(0);
  const rotateBack = useSharedValue(180);

  const animatedFrontStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateX: `${rotateFront.value}deg`,
        },
      ],
    };
  });

  const animatedBackStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateX: `${rotateBack.value}deg`,
        },
      ],
    };
  });

  React.useEffect(() => {
    rotateFront.value = withTiming(rotateFront.value + 180, {
      duration: 500,
      easing: Easing.linear,
    });
  }, [number, rotateFront]);

  React.useEffect(() => {
    rotateBack.value = withTiming(rotateBack.value + 180, {
      duration: 500,
      easing: Easing.linear,
    });
  }, [number, rotateBack]);

  // TODO: Handle time unit previous
  return (
    <View style={styles.unitContainer}>
      <View style={styles.frontCard}>
        <AppText style={[styles.text, styles.frontText]}>{number}</AppText>
      </View>
      <View style={[styles.backCard]}>
        <AppText style={[styles.text, styles.backText]}>{number + 1}</AppText>
      </View>
      <Animated.View style={[styles.front, animatedFrontStyle]}>
        <AppText style={styles.text}>{number}</AppText>
      </Animated.View>
      <Animated.View style={[styles.back, animatedBackStyle]}>
        <AppText style={styles.text}>{number}</AppText>
      </Animated.View>
    </View>
  );
};

export default NumberCard;

const styles = StyleSheet.create({
  unitContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: normalize(8),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: normalize(48),
    height: normalize(60),
    position: 'relative',

    perspective: 10,
  },
  backCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    zIndex: 0,
    backgroundColor: 'black',
    borderRadius: normalize(8),
  },
  frontCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '50%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'black',
    borderRadius: normalize(8),
  },
  frontText: {
    transform: [{translateY: 0}],
  },
  backText: {
    // transform: [{translateY: 32}],
  },
  front: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',

    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: normalize(8),
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backfaceVisibility: 'hidden',

    backgroundColor: 'rgba(0,0,0,0.9)',
    borderRadius: normalize(8),
  },
  text: {
    fontSize: normalize(32),
    fontWeight: '700',
    lineHeight: normalize(64),
  },
});
