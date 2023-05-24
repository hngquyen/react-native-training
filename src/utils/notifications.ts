/* eslint-disable no-console */
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
}

const getFCMToken = async () => {
  let token = await AsyncStorage.getItem('fcmtoken');
  console.log(token, 'old token');
  if (!token) {
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
        console.log(fcmToken, 'new token');

        await AsyncStorage.setItem('fcmtoken', fcmToken);
      }
    } catch (err) {
      console.log(err, 'error fcmtoken');
    }
  }
};
export const notificationListener = () => {
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
};
