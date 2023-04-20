import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {StoreContext} from '~/components/StoreProvider';
import {ActionType} from '~/store/type';
import CosmeticCard from '../CosmeticCard/CosmeticCard';

const CosmeticRecently: React.FC = () => {
  const {state, dispatch} = React.useContext(StoreContext);
  const data = state.dashBoard.heroRecentlyLists;

  React.useEffect(() => {
    fetch(
      'https://data.thetanarena.com/thetan/v1/mkpdashboard/hero/getrecentlylisted?size=10',
      // 'https://data.thetanarena.com/thetan/v1/mkpdashboard/cosmetic/getrecentlylisted?size=10',
    )
      .then(response => response.json())
      .then(dataResponse => {
        dispatch({
          type: ActionType.DASHBOARD_UPDATE_HERO_RECENTLY,
          // type: ActionType.DASHBOARD_UPDATE_COSMETIC_RECENTLY,
          payload: dataResponse.data.listItem,
        });
      });
  }, [dispatch]);
  return (
    <View style={styles.root}>
      {data.map((item, index) => {
        return <CosmeticCard data={item} key={index} />;
      })}
    </View>
  );
};

export default CosmeticRecently;
