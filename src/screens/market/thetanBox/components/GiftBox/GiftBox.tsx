import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import type {GiftBoxType} from '../../constants';
import GiftBoxCard from '../GiftBoxCard/GiftBoxCard';

type Props = {
  data: GiftBoxType[];
};

const GiftBox: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image
          style={styles.bgImage}
          source={require('../../../../../../assets/svg/bg_giftbox.svg')}
        />
        <Text style={styles.headerText}>Gift Box</Text>
      </View>
      <View style={styles.container}>
        {data.length > 0 &&
          data.map(item => {
            return (
              <View style={styles.item}>
                <GiftBoxCard data={item} key={item.name} />
              </View>
            );
          })}
      </View>
    </View>
  );
};

export default GiftBox;
