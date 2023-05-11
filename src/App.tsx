import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import ModalNotification from './components/ModalNotification/ModalNotification';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTabNavigator from './routers/HomeTabNavigator';
import DetailPage from './screens/detailPage/DetailPage';
import Profile from './screens/menu/components/Profile/Profile';

const RootStack = createNativeStackNavigator();

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
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="HomePage">
            <RootStack.Screen
              name="Home"
              component={HomeTabNavigator}
              options={{
                title: 'Market',
                headerStyle: {
                  backgroundColor: '#5336D0',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'Oxanium-Bold',
                },
              }}
            />
            <RootStack.Screen
              name="DetailPage"
              component={DetailPage}
              options={{
                title: '',
                headerStyle: {
                  backgroundColor: '#5336D0',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'Oxanium-Bold',
                },
              }}
            />
            <RootStack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: 'Profile',
                headerStyle: {
                  backgroundColor: '#5336D0',
                },
                headerTitleAlign: 'center',
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontFamily: 'Oxanium-Bold',
                },
              }}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaView>
  );
}

export default App;
