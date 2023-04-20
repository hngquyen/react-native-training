import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from './components/Header/Header';
import HomePage from './scenes/home/HomePage';
import {StoreProvider} from './components/StoreProvider';
function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <StoreProvider>
        <Header />
        <ScrollView>
          <HomePage />
        </ScrollView>
      </StoreProvider>
    </SafeAreaView>
  );
}

export default App;
