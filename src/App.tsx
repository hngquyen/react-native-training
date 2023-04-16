import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Header from './components/Header/Header';
import HomePage from './scenes/home/HomePage';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <Header />
      <View style={backgroundStyle}>
        <HomePage />
      </View>
    </SafeAreaView>
  );
}

export default App;
