import React, {useCallback} from 'react';
import {Brewery} from '../models/breweries';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text} from './index';
import Colors from '../themes/Colors';

const BrewerySnippet = ({brewery}: {brewery: Brewery}) => {
  const onPress = useCallback(() => {
    // navigation.navigate('');
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.title}>{brewery.name}</Text>
      {brewery.street && <Text style={styles.street}>{brewery.street}</Text>}
      <View style={styles.extraContent}>
        <Text style={styles.address}>
          {brewery.city}, {brewery.state}
        </Text>
        <View style={styles.typeContainer}>
          <Text style={styles.type}>{brewery.brewery_type.toUpperCase()}</Text>
        </View>
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
  title: {
    fontSize: 24,
    lineHeight: 34,
    color: Colors.sapphireBlue,
  },
  street: {
    fontSize: 16,
    lineHeight: 24,
    color: Colors.neutralSecondaryText,
  },
  address: {
    fontSize: 14,
    color: Colors.neutralSecondaryText,
  },
  typeContainer: {
    backgroundColor: Colors.jadeGreenPlus1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 100,
  },
  type: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.neutralWhite,
  },
  extraContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default BrewerySnippet;
