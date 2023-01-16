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
  size?: 'normal' | 'tiny';
} & TouchableOpacityProps;

const Button = ({
  type = 'primary',
  text = 'Press Me',
  size = 'normal',
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

  const [sizeStyle, textSizeStyle] = useMemo(() => {
    switch (size) {
      case 'normal':
        return [{}, {}];
      case 'tiny':
        return [styles.tinyContainer, styles.tinyText];
    }
  }, [size]);

  return (
    <TouchableOpacity
      disabled={isDisabled}
      activeOpacity={0.75}
      style={[
        styles.container,
        sizeStyle,
        buttonStyle,
        isDisabled && styles.disableContainer,
        props.style,
      ]}
      {...props}>
      <Text
        style={[
          styles.text,
          textSizeStyle,
          textStyle,
          isDisabled && styles.disabledText,
        ]}>
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
    paddingHorizontal: 16,
  },
  tinyContainer: {
    height: 24,
    paddingHorizontal: 12,
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
  tinyText: {
    fontSize: 12,
    fontWeight: '600',
  },
});

export default Button;
