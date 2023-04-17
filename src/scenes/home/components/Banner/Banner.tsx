import {Dimensions, Image, ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {toImageUri} from '~/utils/utils';
import {StoreContext} from '~/components/StoreProvider';
import {ActionType} from '~/store/type';

const Banner: React.FC = () => {
  const {width} = Dimensions.get('window');
  const height = (width * 134) / 375;

  const {state, dispatch} = React.useContext(StoreContext);
  const data = React.useMemo(() => state.dashBoard.banners, [state]);

  React.useEffect(() => {
    fetch('https://data.thetanarena.com/thetan/v1/mkpdashboard/banner/getlist')
      .then(response => response.json())
      .then(dataResponse => {
        dispatch({
          type: ActionType.DASHBOARD_UPDATE_BANNER,
          payload: dataResponse.data.listBanner,
        });
      });
  }, [dispatch]);
  return (
    <View style={styles.root}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{width, height}}>
        {data &&
          data.length > 0 &&
          data.map(item => {
            return (
              <Image
                key={item.sortOrder}
                source={{uri: toImageUri(item.bgImageMobile)}}
                style={[styles.bannerImage, {width, height}]}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Banner;
