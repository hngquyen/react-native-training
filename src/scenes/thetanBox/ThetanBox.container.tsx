import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AppText from '../../components/AppText/AppText.container';
import { normalize } from '../../utils/utils';

const configMenuTab = [
  {
    title: 'Dashboard',
    isNotify: false,
    tab: 'dashboard',
  },
  {
    title: 'ThetanBox',
    isNotify: true,
    tab: 'thetanbox',
  },
  {
    title: 'Buy',
    isNotify: false,
    tab: 'buy',
  },
  {
    title: 'Rent',
    isNotify: false,
    tab: 'rent',
  },
];

const Separator: React.FC = () => {
  return <View style={styles.bar} />;
};

const ThetanBox: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(configMenuTab[0].tab);
  const flatListRef = React.useRef<FlatList>(null);
  return (
    <FlatList
      ref={flatListRef}
      data={configMenuTab}
      horizontal={true}
      ItemSeparatorComponent={Separator}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            key={item.tab}
            activeOpacity={0.75}
            onPress={() => {
              flatListRef.current?.scrollToIndex({ index });
              setActiveTab(item.tab);
            }}>
            <View
              style={[
                styles.tabItem,
                activeTab === item.tab ? styles.activeTab : null,
              ]}>
              <AppText style={styles.textItem}>{item.title}</AppText>
              {item.isNotify && <View style={styles.dot} />}
            </View>
          </TouchableOpacity>
        );
      }}
      style={styles.root}
    />
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(20),
    backgroundColor: '#271D61',
  },
  tabItem: {
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(18),
    borderRadius: normalize(4),
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#5336D0',
  },
  textItem: {
    fontWeight: '400',
    fontSize: normalize(14),
  },
  dot: {
    position: 'absolute',

    right: normalize(5),
    top: normalize(5),
    width: normalize(5),
    height: normalize(5),
    borderRadius: normalize(5 / 2),
    backgroundColor: '#10FF00',
  },
  bar: {
    marginHorizontal: normalize(4),
    width: normalize(1),
    height: normalize(15),
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default ThetanBox;
