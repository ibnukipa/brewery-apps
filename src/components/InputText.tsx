import React from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import Colors from '../themes/Colors';

const InputText = ({...props}: RNTextInputProps): JSX.Element => {
  return (
    <RNTextInput
      style={[styles.input, props.style]}
      placeholderTextColor={Colors.neutralDisabled}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.neutralWhite,
    height: 36,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.neutralBorder,
    fontSize: 14,
  },
});

export default InputText;
