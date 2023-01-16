import React, {useMemo} from 'react';
import {RouteProp} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import Breweries from '../screens/Breweries';
import BreweryFavorites from '../screens/BreweryFavorites';
import {View} from 'react-native';
import {Text} from '../components';
import Colors from '../themes/Colors';
import {useSelector} from 'react-redux';
import {RootState} from '../models/store';

const Tab = createBottomTabNavigator();

type OptionsType = (props: {
  route: RouteProp<any>;
}) => BottomTabNavigationOptions;

const MyIcon = ({
  routeName,
  color,
  focused,
}: {
  routeName: string;
  color: string;
  focused: boolean;
}) => {
  const breweryFavoritesCount = useSelector(
    (state: RootState) => state.breweryFavourites?.count,
  );

  const [iconSlug] = useMemo(() => {
    switch (routeName) {
      case 'BreweryFavorites':
        let favStr = 'Favourite';
        if (breweryFavoritesCount > 0) {
          favStr += ` (${breweryFavoritesCount})`;
        }
        return [favStr];
      case 'Breweries':
      default:
        return ['Brewery'];
    }
  }, [routeName, breweryFavoritesCount]);

  const [containerStyle, textStyle] = useMemo(() => {
    return [
      {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color,
        paddingBottom: 2,
      },
      {
        color,
      },
    ];
  }, [color]);

  const [focusedContainerStyle, focusedTextStyle] = useMemo(() => {
    if (!focused) {
      return [{}, {}];
    } else {
      return [{borderBottomWidth: 1.5}, {fontWeight: 'bold'}];
    }
  }, [focused]);

  return (
    <View style={[containerStyle, focusedContainerStyle]}>
      <Text style={[textStyle, focusedTextStyle]}>{iconSlug}</Text>
    </View>
  );
};
const tabOptions: OptionsType = ({route}) => ({
  tabBarIcon: ({focused, color}: any) => {
    return <MyIcon routeName={route.name} focused={focused} color={color} />;
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
      <Tab.Screen name={'BreweryFavorites'} options={{ title: 'Brewery Favorites' }} component={BreweryFavorites} />
    </Tab.Navigator>
  );
};

export default Home;
