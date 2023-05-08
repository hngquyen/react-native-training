import {Dimensions, Image, ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {bannerActions} from 'src/features/banner/bannerSlice';
import {toImageUri} from 'src/utils/utils';

const Banner: React.FC = () => {
  const {width} = Dimensions.get('window');
  const height = (width * 134) / 375;

  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.banner.data);

  React.useEffect(() => {
    dispatch(bannerActions.fetchData());
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
