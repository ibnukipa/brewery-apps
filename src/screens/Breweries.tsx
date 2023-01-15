import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState} from '../models/store';
import {Brewery} from '../models/breweries';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import Colors from '../themes/Colors';
import BrewerySnippet from '../components/BrewerySnippet';
import PageFooter from '../components/PageFooter';

const Breweries = () => {
  const dispatch = useDispatch<Dispatch>();
  const breweriesState = useSelector((state: RootState) => state.breweries);

  useEffect(() => {
    dispatch.breweries.fetchData();
  }, [dispatch]);

  const renderBrewery = useCallback(
    ({item}: {item: Brewery}) => <BrewerySnippet brewery={item} />,
    [],
  );

  const renderSeparator = useCallback(
    () => <View style={styles.separator} />,
    [],
  );

  const onRefresh = useCallback(() => {
    dispatch.breweries.fetchData();
  }, [dispatch]);

  const onFetchMore = useCallback(() => {
    dispatch.breweries.fetchMoreData();
  }, [dispatch]);

  return (
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
        !breweriesState?.isLoading && !breweriesState?.isLoadingMore && !breweriesState?.isLastPage
          ? onFetchMore
          : null
      }
      ListFooterComponent={
        <PageFooter isLoading={breweriesState?.isLoadingMore} />
      }
      renderItem={renderBrewery}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutralContainer,
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  separator: {
    height: 1,
    marginVertical: 4,
  },
});

export default Breweries;
