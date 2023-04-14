import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from './components/Header/Header.container';
import ThetanBox from './scenes/thetanBox/ThetanBox.container';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <Header />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <ThetanBox />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
