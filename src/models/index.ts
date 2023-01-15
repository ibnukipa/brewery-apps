import {Models} from '@rematch/core';
import {breweries} from './breweries';

export interface RootModel extends Models<RootModel> {
  breweries: typeof breweries;
}

export const models: RootModel = {breweries};
