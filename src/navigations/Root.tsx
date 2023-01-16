import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './Home';
import Brewery from '../screens/Brewery';
import Colors from "../themes/Colors";

export type RootStackParamList = {
  Home: undefined;
  Brewery: {id: string};
};

const RootStack = createStackNavigator<RootStackParamList>();

const stackOptions = {
  headerTitleStyle: {
    color: Colors.sapphireBluePlus1,
  },
};

const Root = () => {
  return (
    <RootStack.Navigator screenOptions={stackOptions} key={'Root'}>
      <RootStack.Screen
        options={{headerShown: false}}
        name={'Home'}
        component={Home}
      />
      <RootStack.Screen
        options={{
          ...TransitionPresets.ModalPresentationIOS,
        }}
        name={'Brewery'}
        component={Brewery}
      />
    </RootStack.Navigator>
  );
};

export default Root;
