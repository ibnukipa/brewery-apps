import React, {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {FlatList, StyleSheet, View} from 'react-native';
import {EmptyList} from '../components';
import {RootState} from '../models/store';
import {Brewery} from '../models/brewery';
import BrewerySnippet from '../components/BrewerySnippet';
import Styles from '../themes/Styles';
import Colors from '../themes/Colors';

const BreweryFavorites = () => {
  const breweryFavoritesState = useSelector(
    (state: RootState) => state.breweryFavourites,
  );

  const renderBrewery = useCallback(
    ({item}: {item: Brewery}) => <BrewerySnippet brewery={item} />,
    [],
  );

  const renderSeparator = useCallback(
    () => <View style={Styles.separator} />,
    [],
  );

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={breweryFavoritesState?.data}
      renderItem={renderBrewery}
      ItemSeparatorComponent={renderSeparator}
      ListEmptyComponent={
        <EmptyList
          title={'No Favorites'}
          subtitle={
            'Please click `Add to Favorite` to any Brewery\nand it will be listed here'
          }
        />
      }
    />
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

export default BreweryFavorites;
