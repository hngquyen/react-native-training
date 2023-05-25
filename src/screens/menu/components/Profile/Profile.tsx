import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';

import styles from './styles';
import AppText from 'components/AppText/AppText';
import {tabContainerMap} from './config';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const icAvatar = require('../../../../../assets/img/avatar.png');
const icCopy = require('../../../../../assets/img/ic_copy.png');
const icArrow = require('../../../../../assets/img/ic_arrow.png');
// const icHexagon = require('../../../../../assets/img/ic_hexagon.png');

const Profile: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.root}>
      <View style={styles.headerContainer}>
        {/* <Image source={icHexagon} alt="hexagon" style={styles.hexagonOne} /> */}
        {/* <Image source={icHexagon} alt="hexagon" style={styles.hexagonTwo} /> */}
        <Image source={icAvatar} alt="avatar" style={styles.avatar} />
        <View style={styles.infoContainer}>
          <AppText style={styles.name}>Ho Ngoc Quyen</AppText>
          <View style={styles.info}>
            <AppText style={styles.userId}>0x4121eb...70cad37a</AppText>
            <Image source={icCopy} alt="copy" style={styles.copy} />
          </View>
        </View>
      </View>
      <View style={styles.tabContainer}>
        {tabContainerMap.map(tab => {
          return (
            <TouchableOpacity
              key={tab.key}
              onPress={() => navigation.navigate(tab.key)}
              style={styles.tabContent}>
              <View style={styles.tab}>
                <Image source={tab.icon} alt="arrow" style={styles.icon} />
                <AppText style={styles.title}>{tab.title}</AppText>
              </View>
              <Image source={icArrow} alt="arrow" style={styles.arrow} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Profile;
