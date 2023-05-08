import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import Header from './components/Header/Header';
import HomePage from './scenes/home/HomePage';
import ModalNotification from './components/ModalNotification/ModalNotification';
import {Provider} from 'react-redux';
import store from './store';
function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar />
      <Provider store={store}>
        <ModalNotification />
        <Header />
        <View>
          <HomePage />
        </View>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
