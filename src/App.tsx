import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import HomePage from './scenes/home/HomePage';
import ModalNotification from './components/ModalNotification/ModalNotification';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppText from 'components/AppText/AppText';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from 'components/CustomTabBar/CustomTabBar';

const HomeStack = createNativeStackNavigator();

const DetailPage: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5336D0',
      }}>
      <AppText>Details Page</AppText>
    </View>
  );
};

const SpecialEventPage: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5336D0',
      }}>
      <AppText>SpecialEventPage</AppText>
    </View>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomePage">
      <HomeStack.Screen
        name="Home"
        component={HomePage}
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
      <HomeStack.Screen
        name="DetailPage"
        component={DetailPage}
        options={{
          title: 'Detail Page',
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
    </HomeStack.Navigator>
  );
};

const SpecialEventStack = createNativeStackNavigator();

const SpecialEventScreen = () => {
  return (
    <SpecialEventStack.Navigator initialRouteName="SpecialEventPage">
      <SpecialEventStack.Screen
        name="SpecialEvent"
        component={SpecialEventPage}
        options={{
          title: 'Special Event',
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
    </SpecialEventStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#5336D0',
    flex: 1,
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar />
        <Provider store={store}>
          <ModalNotification />
          <Tab.Navigator
            screenOptions={{headerShown: false}}
            tabBar={props => <CustomTabBar {...props} />}>
            <Tab.Screen name="Market" component={HomeStackScreen} />
            <Tab.Screen name="Event" component={SpecialEventScreen} />
            <Tab.Screen name="Daily Quest" component={DetailPage} />
            <Tab.Screen name="Game" component={DetailPage} />
            <Tab.Screen name="Menu" component={DetailPage} />
          </Tab.Navigator>
        </Provider>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
