import AppText from 'components/AppText/AppText';
import Countdown from 'components/Countdown/Countdown';
import React from 'react';
import {View} from 'react-native';
const EventPage: React.FC = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5336D0',
      }}>
      <AppText>Event Page</AppText>
      <Countdown />
    </View>
  );
};

export default EventPage;
