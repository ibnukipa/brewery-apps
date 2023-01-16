import {createModel} from '@rematch/core';
import type {RootModel} from '.';

export type Brewery = {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: string;
  address_3: string;
  city: string;
  state: string;
  county_province: string;
  postal_code: string;
  country: string;
  longitude: string;
  latitude: string;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
};

type BreweryState = {
  data: Brewery;
  isLoading: boolean;
};

const BREWERY_URL = 'https://api.openbrewerydb.org/breweries';

const initialState = {
  data: {},
  isLoading: true,
} as BreweryState;

export const brewery = createModel<RootModel>()({
  name: 'brewery',
  state: initialState,
  reducers: {
    setIsLoading: (state, isLoading: boolean) => {
      return {
        ...state,
        isLoading,
      };
    },
    fetchDataSuccess: (state, data: Brewery) => {
      return {
        ...state,
        data,
        isLoading: false,
      };
    },
    reset: () => {
      return initialState;
    },
  },
  effects: dispatch => ({
    async fetchData(id: string) {
      dispatch.brewery.setIsLoading(true);
      const response = await fetch(`${BREWERY_URL}/${id}`);
      const data = await response.json();
      dispatch.brewery.fetchDataSuccess(data);
    },
  }),
});
