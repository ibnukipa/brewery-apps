import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Breweries from '../screens/Breweries';
import BreweryFavorites from '../screens/BreweryFavorites';
import {IconTab} from '../components';
import Colors from '../themes/Colors';

const Tab = createBottomTabNavigator();

type OptionsType = (props: {
  route: RouteProp<any>;
}) => BottomTabNavigationOptions;

const tabOptions: OptionsType = ({route}) => ({
  tabBarIcon: ({focused, color}: any) => {
    return <IconTab routeName={route.name} focused={focused} color={color} />;
  },
  tabBarActiveTintColor: Colors.sapphireBluePlus1,
  tabBarInactiveTintColor: Colors.sapphireBlue,
  tabBarShowLabel: false,
  headerTitleStyle: {
    color: Colors.sapphireBluePlus1,
  },
});

const Home = () => {
  return (
    <Tab.Navigator key={'Home'} screenOptions={tabOptions}>
      <Tab.Screen name={'Breweries'} component={Breweries} />
      <Tab.Screen
        name={'BreweryFavorites'}
        options={{title: 'Brewery Favorites'}}
        component={BreweryFavorites}
      />
    </Tab.Navigator>
  );
};

export default Home;
