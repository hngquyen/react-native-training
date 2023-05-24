import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import HeroCard from '../HeroCard/HeroCard';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {heroRecentlyActions} from 'src/features/heroRecently/heroRecentlySlice';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HeroRecently: React.FC = () => {
  const data = useAppSelector(state => state.heroRecently.data);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  React.useEffect(() => {
    dispatch(heroRecentlyActions.fetchData());
  }, [dispatch]);
  return (
    <View style={styles.root}>
      {data.map((item, index) => {
        return (
          <HeroCard
            data={item}
            key={index}
            onPress={() => navigation.navigate('DetailPage')}
          />
        );
      })}
    </View>
  );
};

export default HeroRecently;
