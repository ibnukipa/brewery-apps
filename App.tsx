/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Main from './src/navigations/Main';
import {Provider} from 'react-redux';
import {store} from './src/models/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
