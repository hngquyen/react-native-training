import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import {configMenuTab} from './constants';
import AppText from 'components/AppText/AppText';

const Separator: React.FC = () => {
  return <View style={styles.bar} />;
};

const MenuTab: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(configMenuTab[0].tab);
  const flatListRef = React.useRef<FlatList>(null);
  return (
    <FlatList
      ref={flatListRef}
      data={configMenuTab}
      horizontal={true}
      ItemSeparatorComponent={Separator}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            key={item.tab}
            activeOpacity={0.75}
            onPress={() => {
              flatListRef.current?.scrollToIndex({index});
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

export default MenuTab;
