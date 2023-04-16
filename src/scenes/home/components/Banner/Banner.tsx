import {Dimensions, Image, ScrollView, View} from 'react-native';
import React from 'react';
import type {BannerType} from '../../constants';
import styles from './styles';
import {toImageUri} from '~/utils/utils';

type Props = {
  data: BannerType[];
};
const Banner: React.FC<Props> = ({data}) => {
  const {width} = Dimensions.get('window');
  const height = (width * 134) / 375;
  return (
    <View style={styles.root}>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{width, height}}>
        {data.length > 0 &&
          data.map(item => {
            return (
              <Image
                key={item.id}
                source={{uri: toImageUri(item.image)}}
                style={[styles.bannerImage, {width, height}]}
              />
            );
          })}
      </ScrollView>
    </View>
  );
};

export default Banner;
