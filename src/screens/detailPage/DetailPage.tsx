import AppText from 'components/AppText/AppText';
import React from 'react';
import {View} from 'react-native';
const DetailPage: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5336D0',
      }}>
      <AppText>Details Page</AppText>
    </View>
  );
};

export default DetailPage;
