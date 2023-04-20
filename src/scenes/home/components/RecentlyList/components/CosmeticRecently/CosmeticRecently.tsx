import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import {StoreContext} from '~/components/StoreProvider';
import {ActionType} from '~/store/type';
import AppText from '~/components/AppText/AppText';

const CosmeticRecently: React.FC = () => {
  const {dispatch} = React.useContext(StoreContext);
  // const data = state.dashBoard.heroRecentlyLists;

  React.useEffect(() => {
    fetch(
      'https://data.thetanarena.com/thetan/v1/mkpdashboard/cosmetic/getrecentlylisted?size=10',
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
    <View style={styles.root}>
      <AppText>CosmeticRecently</AppText>
    </View>
  );
};

export default CosmeticRecently;
