import React, {useMemo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import Colors from '../themes/Colors';
import Text from './Text';

type ButtonProps = {
  type?: 'primary' | 'secondary';
  text?: string;
  isDisabled?: boolean;
} & TouchableOpacityProps;

const Button = ({
  type = 'primary',
  text = 'Press Me',
  isDisabled,
  ...props
}: ButtonProps): JSX.Element => {
  const [buttonStyle, textStyle] = useMemo(() => {
    switch (type) {
      case 'secondary':
        return [styles.secondaryContainer, styles.secondaryText];
      case 'primary':
      default:
        return [styles.primaryContainer, styles.primaryText];
    }
  }, [type]);

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        styles.container,
        buttonStyle,
        isDisabled && styles.disableContainer,
        props.style,
      ]}
      {...props}>
      <Text style={[styles.text, textStyle, isDisabled && styles.disabledText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 46,
    borderRadius: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryContainer: {
    backgroundColor: Colors.sapphireBlue,
  },
  secondaryContainer: {
    backgroundColor: Colors.sapphireBlueMin3,
  },
  disableContainer: {
    backgroundColor: Colors.neutralBorder,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  primaryText: {
    color: Colors.neutralWhite,
  },
  secondaryText: {
    color: Colors.sapphireBlue,
  },
  disabledText: {
    color: Colors.neutralDisabled,
  },
});

export default Button;
