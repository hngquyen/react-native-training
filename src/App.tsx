import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Header from './components/Header/Header';
import ThetanBox from './scenes/thetanBox/ThetanBox';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <Header />
      <View style={backgroundStyle}>
        <ThetanBox />
      </View>
    </SafeAreaView>
  );
}

export default App;
