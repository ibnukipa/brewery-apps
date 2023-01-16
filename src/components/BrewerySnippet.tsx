import React, {useCallback} from 'react';
import {Brewery} from '../models/brewery';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Text, BreweryType} from './index';
import Colors from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';
import Styles from '../themes/Styles';

const BrewerySnippet = ({brewery}: {brewery: Brewery}) => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.navigate('Brewery', {
      id: brewery.id,
    });
  }, [navigation, brewery]);

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={styles.container}>
      <Text style={Styles.h2}>{brewery.name}</Text>
      {brewery.street && <Text style={Styles.h4}>{brewery.street}</Text>}
      {brewery.address_2 && (
        <Text style={Styles.subtitle}>{brewery.address_2}</Text>
      )}
      {brewery.address_3 && (
        <Text style={Styles.subtitle}>{brewery.address_3}</Text>
      )}
      <View style={styles.extraContent}>
        <Text style={Styles.body}>
          {brewery.city}, {brewery.state}
        </Text>
        <BreweryType type={brewery.brewery_type} />
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
  },
});

export default BrewerySnippet;
