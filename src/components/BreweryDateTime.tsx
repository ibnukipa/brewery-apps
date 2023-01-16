import React, {useMemo} from 'react';
import {StyleSheet} from 'react-native';
import {format} from 'date-fns';
import {Text} from './index';
import Colors from '../themes/Colors';

const BreweryDateTime = ({dateTime}: {dateTime: string}) => {
  const dateTimeString = useMemo(() => {
    if (!dateTime) {
      return '';
    }
    const d = new Date(dateTime);
    return format(d, 'MMM, dd yyyy');
  }, [dateTime]);

  return <Text style={styles.dateTime}>{dateTimeString}</Text>;
};

const styles = StyleSheet.create({
  dateTime: {
    fontSize: 10,
    color: Colors.sapphireBlueMin1,
  },
});

export default BreweryDateTime;
