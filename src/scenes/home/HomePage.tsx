import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Banner from './components/Banner/Banner';
import {StoreContext} from '~/components/StoreProvider';
import {ActionType} from '~/store/type';

const HomePage = () => {
  const {state, dispatch} = React.useContext(StoreContext);
  const data = React.useMemo(() => state.dashBoard, [state]);
  React.useEffect(() => {
    fetch('https://data.thetanarena.com/thetan/v1/mkpdashboard/banner/getlist')
      .then(response => response.json())
      .then(data => {
        dispatch({
          type: ActionType.DASHBOARD_UPDATE_BANNER,
          payload: data.data.listBanner,
        });
      });
  }, [dispatch]);
  return (
    <ScrollView style={styles.root}>
      <Banner data={data.banners} />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
  },
});
