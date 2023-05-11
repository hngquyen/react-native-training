import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {GroupCount, filterList} from './constants';
import AppText from 'components/AppText/AppText';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {metricStatsActions} from 'src/features/metricStats/metricStatsSlice';

const MetricStats: React.FC = () => {
  const [filterKey, setFilterKey] = React.useState(GroupCount.Time_24_hours);
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.metricsStats.data);

  React.useEffect(() => {
    dispatch(metricStatsActions.fetchData(filterKey));
  }, [dispatch, filterKey]);
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        {filterList.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.wrapText, item.id === filterKey && styles.active]}
              onPress={() => setFilterKey(item.id)}>
              <AppText style={styles.headerLabel}>{item.label}</AppText>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.content}>
        <View style={styles.item}>
          <Image
            style={styles.icon}
            source={require('../../../../../assets/img/ic_totalListed.png')}
          />
          <View style={styles.right}>
            <View style={styles.wrapLabel}>
              <AppText style={styles.label}>Total Listed</AppText>
            </View>
            <AppText style={styles.value}>{data?.listedCount}</AppText>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.icon}
            source={require('../../../../../assets/img/ic_transVolume.png')}
          />
          <View style={styles.right}>
            <View style={styles.wrapLabel}>
              <AppText style={styles.label}>Transaction Volume (THC) </AppText>
            </View>
            <AppText style={styles.value}>{data?.transactionRealValue}</AppText>
          </View>
        </View>
        <View style={styles.item}>
          <Image
            style={styles.icon}
            source={require('../../../../../assets/img/ic_itemsTraded.png')}
          />
          <View style={styles.right}>
            <View style={styles.wrapLabel}>
              <AppText style={styles.label}>Items Traded</AppText>
            </View>
            <AppText style={styles.value}>{data?.tradedCount}</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MetricStats;
