import {useSelector} from 'react-redux';
import {RootState} from '../models/store';
import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Text} from './index';

const IconTab = ({
  routeName,
  color,
  focused,
}: {
  routeName: string;
  color: string;
  focused: boolean;
}) => {
  const breweryFavoritesCount = useSelector(
    (state: RootState) => state.breweryFavourites?.count,
  );

  const [iconSlug] = useMemo(() => {
    switch (routeName) {
      case 'BreweryFavorites':
        let favStr = 'Favorite';
        if (breweryFavoritesCount > 0) {
          favStr += ` (${breweryFavoritesCount})`;
        }
        return [favStr];
      case 'Breweries':
      default:
        return ['Brewery'];
    }
  }, [routeName, breweryFavoritesCount]);

  const [containerStyle, textStyle] = useMemo(() => {
    return [
      {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: color,
        paddingBottom: 2,
      },
      {
        color,
      },
    ];
  }, [color]);

  const [focusedContainerStyle, focusedTextStyle] = useMemo(() => {
    if (!focused) {
      return [{}, {}];
    } else {
      return [{borderBottomWidth: 1.5}, {fontWeight: 'bold'}];
    }
  }, [focused]);

  return (
    <View style={[containerStyle, focusedContainerStyle]}>
      <Text style={[textStyle, focusedTextStyle]}>{iconSlug}</Text>
    </View>
  );
};

export default IconTab;
