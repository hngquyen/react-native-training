import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppText from 'components/AppText/AppText';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {tabContainerMap} from './config';

const icAvatar = require('../../../assets/img/avatar.png');
const icMetaMask = require('../../../assets/img/ic_metamask.png');
const icCopy = require('../../../assets/img/ic_copy.png');
const icArrow = require('../../../assets/img/ic_arrow.png');

const Menu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={() => navigation.navigate('Profile')}>
        <View style={styles.infoContainer}>
          <Image source={icAvatar} alt="alt" style={styles.avatar} />
          <View style={styles.info}>
            <AppText style={styles.name}>Ho Ngoc Quyen</AppText>
            <View style={styles.subInfoContainer}>
              <Image
                source={icMetaMask}
                alt="metamask"
                style={styles.metamask}
              />
              <AppText style={styles.userId}>
                Lorem ipsum ... adipiscing elit.
              </AppText>
              <Image source={icCopy} alt="copy" style={styles.copy} />
            </View>
          </View>
        </View>
        <Image source={icArrow} alt="arrow" style={styles.arrow} />
      </TouchableOpacity>
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

export default Menu;
