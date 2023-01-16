import React from 'react';
import {render} from '@testing-library/react-native';
import {store as RStore} from '../src/models/store';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = RStore,
    ...renderOptions
  } = {},
) {
  function Wrapper({children}) {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>{children}</NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {renderWithProviders as render};
