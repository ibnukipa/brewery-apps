import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from './Text';
import Styles from '../themes/Styles';

const EmptyList = ({title, subtitle}: {title: string; subtitle: string}) => {
  return (
    <View style={styles.container}>
      <Text style={[Styles.h2, Styles.textCenter]}>{title}</Text>
      <Text style={[Styles.subtitle, Styles.textCenter]}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default EmptyList;
