import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import Header from './components/Header/Header';
import Buy from './scenes/buy/Buy';
import {StoreProvider} from './components/StoreProvider';
import ModalNotification from './components/ModalNotification/ModalNotification';
function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <StoreProvider>
        <ModalNotification />
        <Header />
        <ScrollView>
          <Buy />
        </ScrollView>
      </StoreProvider>
    </SafeAreaView>
  );
}

export default App;
