import React from 'react';
import HomePage from './home/HomePage';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import ThetanBox from './thetanBox/ThetanBox';
import MenuTab from 'components/Header/components/MenuTab/MenuTab';

const renderScene = SceneMap({
  dashboard: HomePage,
  thetanbox: ThetanBox,
  buy: ThetanBox,
  rent: ThetanBox,
});
const MarketTab: React.FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'dashboard', title: 'Dashboard'},
    {key: 'thetanbox', title: 'ThetanBox'},
    {key: 'buy', title: 'Buy'},
    {key: 'rent', title: 'Rent'},
  ]);
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={props => <MenuTab {...props} setIndex={setIndex} />}
      initialLayout={{width: layout.width}}
    />
  );
};

export default MarketTab;
