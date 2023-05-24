/* eslint-disable no-console */
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
import {
  // notificationListener,
  requestUserPermission,
} from './utils/notifications';
import messaging from '@react-native-firebase/messaging';

const RootStack = createNativeStackNavigator();

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
    flex: 1,
  };

  React.useEffect(() => {
    requestUserPermission();
    // notificationListener();
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log(
        'Notification caused app to open from background state 2:',
        remoteMessage.notification,
      );
      // navigation.navigate(remoteMessage.data.type);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
          // setInitialRoute(remoteMessage.data.type);
        }
        //   setLoading(false);
      });

    messaging().onMessage(async remoteMessage => {
      console.log(
        'notification on foreground state...',
        remoteMessage.notification,
      );
    });
  }, []);
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
              options={{headerShown: false}}
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
