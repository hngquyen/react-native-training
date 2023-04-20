import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {RecentlyTab, categoryMap} from './constants';
import AppText from '~/components/AppText/AppText';
import HeroRecently from './components/HeroRecently/HeroRecently';
import CosmeticRecently from './components/CosmeticRecently/CosmeticRecently';

const RecentlyList: React.FC = () => {
  const [recentlyTab, setRecentlyTab] = React.useState(RecentlyTab.HERO);
  const renderContent = () => {
    switch (recentlyTab) {
      case RecentlyTab.HERO:
        return <HeroRecently />;
      case RecentlyTab.COSMETIC:
        return <CosmeticRecently />;
      default:
        return null;
    }
  };
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <AppText style={styles.headerText}>Recently Listed</AppText>
        <View style={styles.category}>
          {categoryMap.map(item => (
            <TouchableOpacity
              style={[
                styles.tabContainer,
                recentlyTab === item.id && styles.active,
              ]}
              key={item.title}
              onPress={() => setRecentlyTab(item.id)}>
              <Image source={item.img} alt="iconTab" style={styles.iconTab} />
              <AppText style={styles.tabText}>{item.title}</AppText>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

export default RecentlyList;
