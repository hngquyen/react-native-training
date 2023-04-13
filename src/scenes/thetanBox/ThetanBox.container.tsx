import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import AppText from '../../components/AppText/AppText.container';

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

const ThetanBox: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(configMenuTab[0].tab);
  return (
    <FlatList
      data={configMenuTab}
      horizontal={true}
      ItemSeparatorComponent={() => <View style={styles.bar} />}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            key={item.tab}
            activeOpacity={0.75}
            onPress={() => setActiveTab(item.tab)}>
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
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#271D61',
  },
  tabItem: {
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#5336D0',
  },
  textItem: {
    fontWeight: '400',
    fontSize: 14,
  },
  dot: {
    position: 'absolute',

    right: 5,
    top: 5,
    width: 5,
    height: 5,
    borderRadius: 5 / 2,
    backgroundColor: '#10FF00',
  },
  bar: {
    marginHorizontal: 4,
    width: 1,
    height: 15,
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default ThetanBox;
