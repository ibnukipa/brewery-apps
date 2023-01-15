import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Breweries from '../screens/Breweries';
import BreweryFavourites from '../screens/BreweryFavourites';
import {View} from 'react-native';
import {Text} from '../components';
import Colors from '../themes/Colors';
import {GeneralStyle} from '../types/general';

const Tab = createBottomTabNavigator();

type OptionsType = (props: {
  route: RouteProp<any>;
}) => BottomTabNavigationOptions;

const tabOptions: OptionsType = ({route}) => ({
  tabBarIcon: ({focused, color}: any) => {
    let slug: string;

    switch (route.name) {
      case 'BreweryFavourites':
        slug = 'Favourite';
        break;
      case 'Breweries':
      default:
        slug = 'Brewery';
        break;
    }

    const containerStyle: GeneralStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: color,
      paddingBottom: 2,
    };

    const textStyle: GeneralStyle = {
      color,
    };

    if (focused) {
      containerStyle.borderBottomWidth = 1.5;
      textStyle.fontWeight = 'bold';
    }

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>{slug}</Text>
      </View>
    );
  },
  tabBarActiveTintColor: Colors.sapphireBluePlus1,
  tabBarInactiveTintColor: Colors.sapphireBlue,
  tabBarShowLabel: false,
});

const Main = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen name={'Breweries'} component={Breweries} />
      <Tab.Screen name={'BreweryFavourites'} component={BreweryFavourites} />
    </Tab.Navigator>
  );
};

export default Main;
