import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../themes/Colors';
import {Text} from './index';

const PageFooter = ({isLoading = true}: {isLoading: boolean}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isLoading ? 'Fetching' : 'No more data'}</Text>
      {isLoading && (
        <ActivityIndicator
          style={styles.indicator}
          size={'small'}
          color={Colors.sapphireBlue}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.sapphireBlueMin1,
  },
  indicator: {
    marginLeft: 8,
  },
});
export default PageFooter;
