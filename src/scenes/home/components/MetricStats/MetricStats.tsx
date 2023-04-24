import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {GroupCount, filterList} from './constants';
import {StoreContext} from 'components/StoreProvider';
import AppText from 'components/AppText/AppText';
import {ActionType} from 'src/store/type';
import {icItemsTraded, icTotalListed, icTransVolume} from 'src/assets/img';

const MetricStats: React.FC = () => {
  const [filterKey, setFilterKey] = React.useState(GroupCount.Time_24_hours);
  const {state, dispatch} = React.useContext(StoreContext);
  const data = state.dashBoard.metricStats;

  React.useEffect(() => {
    fetch(
      `https://data.thetanarena.com/thetan/v1/mkpdashboard/metric/getmetricstats?groupCount=${filterKey}`,
    )
      .then(response => response.json())
      .then(dataResponse => {
        dispatch({
          type: ActionType.DASHBOARD_UPDATE_METRIC_STATS,
          payload: dataResponse.data,
        });
      });
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
          <Image style={styles.icon} source={icTotalListed} />
          <View style={styles.right}>
            <View style={styles.wrapLabel}>
              <AppText style={styles.label}>Total Listed</AppText>
            </View>
            <AppText style={styles.value}>{data?.listedCount}</AppText>
          </View>
        </View>
        <View style={styles.item}>
          <Image style={styles.icon} source={icTransVolume} />
          <View style={styles.right}>
            <View style={styles.wrapLabel}>
              <AppText style={styles.label}>Transaction Volume (THC) </AppText>
            </View>
            <AppText style={styles.value}>{data?.transactionRealValue}</AppText>
          </View>
        </View>
        <View style={styles.item}>
          <Image style={styles.icon} source={icItemsTraded} />
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
