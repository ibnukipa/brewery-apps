import React, {useCallback} from 'react';
import {Brewery} from '../models/brewery';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, BreweryType} from './index';
import Colors from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';
import Styles from '../themes/Styles';
import Button from './Button';
import {useDispatch, useSelector} from 'react-redux';
import {Dispatch, RootState, store} from '../models/store';

const BrewerySnippet = ({brewery}: {brewery: Brewery}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch<Dispatch>();
  const isFavorite = useSelector((state: RootState) =>
    store.select.breweryFavourites.isFavorite(state, {id: brewery.id}),
  );

  const onPress = useCallback(() => {
    navigation.navigate('Brewery', {
      id: brewery.id,
    });
  }, [navigation, brewery]);

  const addToFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch.breweryFavourites.remove(brewery.id);
    } else {
      dispatch.breweryFavourites.add(brewery);
    }
  }, [brewery, dispatch.breweryFavourites, isFavorite]);

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={styles.container}>
      <BreweryType variant={'floating'} type={brewery.brewery_type} />
      <Text numberOfLines={1} style={Styles.h2}>
        {brewery.name}
      </Text>
      {brewery.street && <Text style={Styles.h4}>{brewery.street}</Text>}
      {brewery.address_2 && (
        <Text style={Styles.subtitle}>{brewery.address_2}</Text>
      )}
      {brewery.address_3 && (
        <Text style={Styles.subtitle}>{brewery.address_3}</Text>
      )}
      <View style={styles.extraContent}>
        <Text numberOfLines={1} style={[Styles.body, styles.extraText]}>
          {brewery.city}, {brewery.state}
        </Text>
        <Button
          onPress={addToFavorite}
          isDisabled={!brewery}
          size={'tiny'}
          type={isFavorite ? 'secondary' : 'primary'}
          text={isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutralWhite,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralDisabled,
  },
  extraContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  extraText: {
    flex: 1,
  }
});

export default BrewerySnippet;
