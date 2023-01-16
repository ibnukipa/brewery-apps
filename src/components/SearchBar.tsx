import {StyleSheet, View} from 'react-native';
import InputText from './InputText';
import React from 'react';
import Colors from '../themes/Colors';
import {useDispatch} from 'react-redux';
import {Dispatch} from '../models/store';
import debounce from 'lodash.debounce';

const SearchBar = () => {
  const dispatch = useDispatch<Dispatch>();

  const onSearch = debounce((searchKey: string) => {
    dispatch.breweries.setByName(searchKey);
  }, 500);

  return (
    <View style={styles.container}>
      <InputText
        returnKeyType={'done'}
        placeholder={'Search Brewery by Name...'}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.neutralWhite,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
export default SearchBar;
