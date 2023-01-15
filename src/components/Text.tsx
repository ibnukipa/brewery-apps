import React, {useMemo} from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import Colors, {IColors} from '../themes/Colors';
import {GeneralStyle} from '../types/general';

type TextProps = {
  color?: IColors;
} & RNTextProps;

const Text = ({
  color = 'neutralMainText',
  children,
  ...props
}: TextProps): JSX.Element => {
  const colorStyle: GeneralStyle = useMemo(() => {
    return {
      color: Colors[color],
    };
  }, [color]);

  return (
    <RNText style={[colorStyle, props.style]} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
