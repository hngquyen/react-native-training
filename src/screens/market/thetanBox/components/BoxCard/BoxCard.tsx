import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import type {SystemBoxType} from '../../constants';
import AppText from 'components/AppText/AppText';
import {toImageUri} from 'src/utils/utils';

type Props = {
  data: SystemBoxType;
};

const BoxCard: React.FC<Props> = ({data}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.bgPath} source={{uri: toImageUri(data.bgPath)}} />
      <Image style={styles.imgPath} source={{uri: toImageUri(data.imgPath)}} />
      <View style={styles.content}>
        <AppText style={styles.header}>{data.name}</AppText>
        <AppText style={styles.remain}>
          Remain boxes : <AppText style={styles.amount}>{data.amount}</AppText>
        </AppText>
      </View>
      <View style={styles.free}>
        <AppText style={styles.freeText}>Free</AppText>
      </View>
    </View>
  );
};

export default BoxCard;
