import {View} from 'react-native';
import React from 'react';
import styles from './styles';
import CosmeticCard from '../CosmeticCard/CosmeticCard';
import {useAppDispatch, useAppSelector} from 'src/store/hooks';
import {heroRecentlyActions} from 'src/features/heroRecently/heroRecentlySlice';

const CosmeticRecently: React.FC = () => {
  const data = useAppSelector(state => state.heroRecently.data);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(heroRecentlyActions.fetchData());
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
