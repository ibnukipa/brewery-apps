import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from './Home';
import Brewery from '../screens/Brewery';

export type RootStackParamList = {
  Home: undefined;
  Brewery: {id: string};
};

const RootStack = createStackNavigator<RootStackParamList>();

const Root = () => {
  return (
    <RootStack.Navigator key={'Root'}>
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
