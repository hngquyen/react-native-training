import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {StoreContext} from 'components/StoreProvider';
import {ActionType} from 'src/store/type';
import HeroCard from '../home/components/RecentlyList/components/HeroCard/HeroCard';
import {BuyTab, categoryMap} from './constants';
import AppText from 'components/AppText/AppText';
import styles from './styles';
import Pagination from 'components/Pagination/Pagination';

const Buy = () => {
  const {state, dispatch} = React.useContext(StoreContext);
  const data = state.dashBoard.heroRecentlyLists;
  const [tab, setTab] = React.useState(BuyTab.HERO);
  const [pageNumber, setPageNumber] = React.useState(1);
  React.useEffect(() => {
    fetch(
      'https://data.thetanarena.com/thetan/v1/mkpdashboard/hero/getrecentlylisted?size=10',
    )
      .then(response => response.json())
      .then(dataResponse => {
        dispatch({
          type: ActionType.DASHBOARD_UPDATE_HERO_RECENTLY,
          payload: dataResponse.data.listItem,
        });
      });
  }, [dispatch]);

  return (
    <ScrollView style={styles.root}>
      <View style={styles.category}>
        {categoryMap.map(item => (
          <TouchableOpacity
            style={[styles.tabContainer, tab === item.id && styles.active]}
            key={item.title}
            onPress={() => setTab(item.id)}>
            <Image source={item.img} alt="iconTab" style={styles.iconTab} />
            <AppText style={styles.tabText}>{item.title}</AppText>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          {data.map((item, index) => {
            return <HeroCard data={item} key={index} />;
          })}
        </View>
      </View>
      <Pagination
        page={pageNumber}
        totalPages={5}
        onPageChange={page => setPageNumber(page)}
      />
    </ScrollView>
  );
};

export default Buy;
