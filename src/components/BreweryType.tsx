import {Text} from './index';
import {StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import Colors from '../themes/Colors';

const BreweryType = ({
  type,
  variant = 'normal',
}: {
  type: string;
  variant?: 'normal' | 'floating';
}) => {
  const variantStyle = useMemo(() => {
    switch (variant) {
      case 'normal':
        return styles.typeNormalContainer;
      case 'floating':
        return styles.typeFloatingContainer;
    }
  }, [variant]);

  return (
    <View style={[styles.typeContainer, variantStyle]}>
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
  typeNormalContainer: {},
  typeFloatingContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    borderRadius: 12,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
  },
  type: {
    fontSize: 10,
    fontWeight: 'bold',
    color: Colors.neutralWhite,
  },
});

export default BreweryType;
