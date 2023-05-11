import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import CustomTabBar from 'components/CustomTabBar/CustomTabBar';
import React from 'react';
import EventPage from 'src/screens/eventPage/EventPage';
import MarketTab from 'src/screens/market/MarketTab';
import Menu from 'src/screens/menu/Menu';

const Tab = createBottomTabNavigator();
const icShop = require('../../assets/img/ic_shop.png');
const icEvent = require('../../assets/img/ic_event.png');
const icQuest = require('../../assets/img/ic_quest.png');
const icGame = require('../../assets/img/ic_game.png');
const icMenu = require('../../assets/img/ic_menu.png');

const HomeTabNavigator = () => {
  const BottomTab = React.useCallback(
    (props: BottomTabBarProps) => <CustomTabBar {...props} />,
    [],
  );
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={BottomTab}>
      <Tab.Screen
        name="Market"
        component={MarketTab}
        options={{tabBarLabel: 'Market', tabBarIcon: icShop}}
      />
      <Tab.Screen
        name="Event"
        component={EventPage}
        options={{tabBarLabel: 'Event', tabBarIcon: icEvent}}
      />
      <Tab.Screen
        name="Daily Quest"
        component={EventPage}
        options={{tabBarLabel: 'Quest', tabBarIcon: icQuest}}
      />
      <Tab.Screen
        name="Game"
        component={EventPage}
        options={{tabBarLabel: 'Game', tabBarIcon: icGame}}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{tabBarLabel: 'Menu', tabBarIcon: icMenu}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
