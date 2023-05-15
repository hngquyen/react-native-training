import React from 'react';
import AppText from 'components/AppText/AppText';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Image, ImageSourcePropType, TouchableOpacity, View} from 'react-native';
import {normalize} from 'src/utils/utils';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#0F0933',
        height: normalize(53),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            // accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={
                options.tabBarIcon
                  ? (options.tabBarIcon as ImageSourcePropType)
                  : require('../../../assets/img/ic_thc.png')
              }
              alt="iconTab"
              style={{
                width: normalize(20),
                height: normalize(20),
                marginBottom: normalize(5),
              }}
            />
            <AppText style={{color: isFocused ? '#795CF5' : '#FFFFFF'}}>
              {label.toString()}
            </AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
