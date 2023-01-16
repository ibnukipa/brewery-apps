import {createModel} from '@rematch/core';
import type {RootModel} from '.';
import {Pagination} from '../types/general';
import {Brewery} from './brewery';

type BreweriesSearch = {
  by_name?: string;
};

type BreweriesState = {
  isLoading: boolean;
  isLoadingMore: boolean;
  isLastPage: boolean;
} & Pagination<Brewery> &
  BreweriesSearch;

const BREWERIES_URL = 'https://api.openbrewerydb.org/breweries';

const generateBreweriesQueryParams = (breweriesState: BreweriesState) => {
  let queries: string = '';

  if (breweriesState.page_offset > 0) {
    queries += `&page=${breweriesState.page_offset}`;
  }

  if (breweriesState.page_limit >= 0) {
    queries += `&per_page=${breweriesState.page_limit}`;
  }

  if (breweriesState.by_name) {
    queries += `&by_name=${breweriesState.by_name}`;
  }

  return queries;
};

export const breweries = createModel<RootModel>()({
  name: 'breweries',
  state: {
    data: [],
    page_offset: 1,
    page_limit: 10,
    isLoading: true,
    isLoadingMore: false,
    isLastPage: false,
  } as BreweriesState,
  reducers: {
    setIsLoading: (state, isLoading: boolean) => {
      return {
        ...state,
        isLoading,
      };
    },
    setIsLoadingMore: (state, isLoadingMore: boolean) => {
      return {
        ...state,
        isLoadingMore,
      };
    },
    setByName: (state, searchKey: string) => {
      return {
        ...state,
        by_name: searchKey,
      };
    },
    fetchDataSuccess: (state, data: Brewery[]) => {
      return {
        ...state,
        data,
        page_offset: 1,
        isLoading: false,
        isLastPage: false,
      };
    },
    fetchMoreDataSuccess: (state, data: Brewery[]) => {
      return {
        ...state,
        data: [...state.data, ...data],
        page_offset: state.page_offset + 1,
        isLoadingMore: false,
        isLastPage: data.length === 0,
      };
    },
  },
  effects: dispatch => ({
    async fetchData(_: void, rootState) {
      dispatch.breweries.setIsLoading(true);
      const breweriesState = rootState.breweries;
      const breweriesQueries = generateBreweriesQueryParams({
        ...breweriesState,
        page_offset: 1,
      });
      const response = await fetch(`${BREWERIES_URL}?${breweriesQueries}`);
      const data = await response.json();
      dispatch.breweries.fetchDataSuccess(data);
    },
    async fetchMoreData(_: void, rootState) {
      dispatch.breweries.setIsLoadingMore(true);
      const breweriesState = rootState.breweries;
      const breweriesQueries = generateBreweriesQueryParams({
        ...breweriesState,
        page_offset: breweriesState.page_offset + 1,
      });
      const response = await fetch(`${BREWERIES_URL}?${breweriesQueries}`);
      const data = await response.json();
      dispatch.breweries.fetchMoreDataSuccess(data);
    },
  }),
});
