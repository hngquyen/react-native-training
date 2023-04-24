import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {HeroItemType} from 'src/models';
import {toImageUri} from 'src/utils/utils';
import AppText from 'components/AppText/AppText';

type Props = {
  data: HeroItemType;
};
const HeroCard: React.FC<Props> = ({data}) => {
  return (
    <View>
      <TouchableOpacity style={styles.item}>
        <Image
          style={styles.avatarImg}
          source={{uri: toImageUri(data.imageAvatar)}}
          alt={data.id}
        />
        <View style={styles.content}>
          <LinearGradient
            colors={['rgba(0, 45, 206, 0.46)', '#0127AA']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.nameContainer}>
            <View>
              <View style={styles.nameContent}>
                <AppText style={styles.skinName}>{data.skinName}</AppText>
                <AppText style={styles.name}>{data.name}</AppText>
              </View>
              <View style={styles.releaseContainer}>
                <AppText style={styles.releaseText}>Released time</AppText>
                <AppText style={styles.releaseText}>a hour ago</AppText>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.infoContainer}>
            <View style={styles.cornerTag}>
              <AppText style={styles.tagText}>
                {data.status === 10 ? 'Buy' : 'Rent'}
              </AppText>
            </View>
            <View style={styles.releaseContainer}>
              <AppText style={styles.releaseText}>
                {data.status === 10 ? 'gTHC battle' : 'Battles for rent'}
              </AppText>
              <AppText style={styles.battleText}>
                {data.status === 10
                  ? `${data.battleCapMax - data.battleCap}/${data.battleCapMax}`
                  : data.battleCap}
              </AppText>
            </View>
            <View style={styles.releaseContainer}>
              <AppText style={styles.releaseText}>Price</AppText>
              <View style={styles.priceTHC}>
                <Image
                  style={styles.thcIcon}
                  alt="thcIcon"
                  source={require('../../../../../../../assets/img/ic_thc.png')}
                />
                <AppText style={styles.thcText}>
                  {data.price / Math.pow(10, 8)} THC
                </AppText>
              </View>
            </View>
            <View style={styles.dollarContainer}>
              <AppText />
              <AppText style={styles.dollarPrice}>$ 0.77 USD</AppText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeroCard;
