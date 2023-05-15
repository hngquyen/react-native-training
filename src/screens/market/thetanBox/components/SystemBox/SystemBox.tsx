import {View, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import type {SystemBoxType} from '../../constants';
import BoxCard from '../BoxCard/BoxCard';

type Props = {
  data: SystemBoxType[];
};

const SystemBox: React.FC<Props> = ({data}) => {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        {data.length > 0 &&
          data.map(item => {
            return (
              <View style={styles.item}>
                <BoxCard data={item} key={item.name} />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

export default SystemBox;
