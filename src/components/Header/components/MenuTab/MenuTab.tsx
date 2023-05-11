import React from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import AppText from 'components/AppText/AppText';

const Separator: React.FC = () => {
  return <View style={styles.bar} />;
};

type Props = {
  navigationState: {
    index: number;
    routes: {
      key: string;
      title: string;
    }[];
  };
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

const MenuTab: React.FC<Props> = ({navigationState, setIndex}) => {
  const flatListRef = React.useRef<FlatList>(null);
  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={navigationState.routes}
        horizontal={true}
        ItemSeparatorComponent={Separator}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              key={item.key}
              activeOpacity={0.75}
              onPress={() => {
                flatListRef.current?.scrollToIndex({index});
                setIndex(index);
              }}>
              <View
                style={[
                  styles.tabItem,
                  index === navigationState.index ? styles.activeTab : null,
                ]}>
                <AppText style={styles.textItem}>
                  {navigationState.routes[index].title}
                </AppText>
                {/* {item.isNotify && <View style={styles.dot} />} */}
              </View>
            </TouchableOpacity>
          );
        }}
        style={styles.root}
      />
    </View>
  );
};

export default MenuTab;
