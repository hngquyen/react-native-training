import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Header from './components/Header/Header';
import HomePage from './scenes/home/HomePage';
import {StoreProvider} from './components/StoreProvider';
function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <StoreProvider>
        <Header />
        <View style={backgroundStyle}>
          <HomePage />
        </View>
      </StoreProvider>
    </SafeAreaView>
  );
}

export default App;
