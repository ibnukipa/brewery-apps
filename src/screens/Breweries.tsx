import React, {useCallback, useEffect, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../models/store';
import {Brewery} from '../models/brewery';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import Colors from '../themes/Colors';
import BrewerySnippet from '../components/BrewerySnippet';
import PageFooter from '../components/PageFooter';
import SearchBar from '../components/SearchBar';
import Styles from '../themes/Styles';
import {EmptyList} from '../components';

const Breweries = () => {
  const dispatch = useDispatch<Dispatch>();
  const breweriesState = useSelector((state: RootState) => state.breweries);

  useEffect(() => {
    dispatch.breweries.fetchData();
  }, [dispatch, breweriesState?.by_name]);

  const renderBrewery = useCallback(
    ({item}: {item: Brewery}) => <BrewerySnippet brewery={item} />,
    [],
  );

  const renderSeparator = useCallback(
    () => <View style={Styles.separator} />,
    [],
  );

  const onRefresh = useCallback(() => {
    dispatch.breweries.fetchData();
  }, [dispatch]);

  const onFetchMore = useCallback(() => {
    dispatch.breweries.fetchMoreData();
  }, [dispatch]);

  const [emptyTitle, emptyDesc] = useMemo(() => {
    if (breweriesState?.by_name === '') {
      return [
        'There is No Data',
        'Please come back later when the system is back',
      ];
    } else {
      return [
        `No Data for "${breweriesState?.by_name}"`,
        'Please use another to find the breweries',
      ];
    }
  }, [breweriesState?.by_name]);

  return (
    <>
      <SearchBar />
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.content}
        data={breweriesState?.data}
        refreshing={breweriesState?.isLoading}
        refreshControl={
          <RefreshControl
            refreshing={breweriesState?.isLoading}
            onRefresh={onRefresh}
          />
        }
        onEndReached={
          !breweriesState?.isLoading &&
          !breweriesState?.isLoadingMore &&
          !breweriesState?.isLastPage
            ? onFetchMore
            : null
        }
        ListFooterComponent={
          breweriesState?.data.length > 8 ? (
            <PageFooter isLoading={breweriesState?.isLoadingMore} />
          ) : null
        }
        ListEmptyComponent={
          !breweriesState?.isLoading ? (
            <EmptyList title={emptyTitle} subtitle={emptyDesc} />
          ) : null
        }
        showsVerticalScrollIndicator={false}
        renderItem={renderBrewery}
        ItemSeparatorComponent={renderSeparator}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutralContainer,
  },
  content: {
    padding: 16,
    flexGrow: 1,
  },
});

export default Breweries;
