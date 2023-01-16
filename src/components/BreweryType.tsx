import {Text} from './index';
import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';

const BreweryType = ({type}: {type: string}) => {
  return (
    <View style={styles.typeContainer}>
      <Text style={styles.type}>{type?.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BreweryType;
