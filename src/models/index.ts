import {Models} from '@rematch/core';
import {breweries} from './breweries';
import {brewery} from './brewery';
import {breweryFavourites} from './breweryFavorites';

export interface RootModel extends Models<RootModel> {
  breweries: typeof breweries;
  brewery: typeof brewery;
  breweryFavourites: typeof breweryFavourites;
}

export const models: RootModel = {breweries, brewery, breweryFavourites};
