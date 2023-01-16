import {Models} from '@rematch/core';
import {breweries} from './breweries';
import {brewery} from './brewery';

export interface RootModel extends Models<RootModel> {
  breweries: typeof breweries;
  brewery: typeof brewery;
}

export const models: RootModel = {breweries, brewery};
