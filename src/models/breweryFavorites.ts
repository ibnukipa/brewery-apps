import {createModel} from '@rematch/core';
import type {RootModel} from '.';
import {Brewery} from './brewery';
import {RootState} from './store';

type BreweryFavoritesState = {
  data: Brewery[];
  count: number;
};

export const breweryFavourites = createModel<RootModel>()({
  name: 'breweryFavourites',
  state: {
    data: [],
    count: 0,
  } as BreweryFavoritesState,
  selectors: (slice, createSelector) => ({
    isFavorite: () => {
      return createSelector(
        (state: RootState, props: {id: string}): [Brewery[], string] => {
          return [state.breweryFavourites?.data, props.id];
        },
        ([data, id]) => data.findIndex((obj: any) => obj.id === id) > -1,
      );
    },
  }),
  reducers: {
    add: (state, brewery: Brewery) => {
      return {
        ...state,
        data: [...state.data, brewery],
      };
    },
    remove: (state, breweryId: Brewery['id']) => {
      const removeId = state.data.findIndex(obj => obj.id === breweryId);

      let newData = state.data;
      if (removeId > -1) {
        newData.splice(removeId, 1);
      }

      return {
        ...state,
        data: newData,
      };
    },
  },
});
