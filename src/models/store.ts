import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import selectPlugin from '@rematch/select';
import persistPlugin from '@rematch/persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {models, RootModel} from '.';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['breweryFavourites'],
};
export const store = init({
  models,
  // @ts-ignore
  plugins: [selectPlugin(), persistPlugin(persistConfig)],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
