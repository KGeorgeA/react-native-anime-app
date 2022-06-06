import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';

import { ColorValue, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TouchableComponent from './TouchableComponent';

import type { TouchableComponentPropsType } from './TouchableComponent';

type CustomButtonPropsType = {
  touchableComponentProps?: TouchableComponentPropsType;
  iconName?: string;
  iconSize?: number;
  iconColor?: number | ColorValue;
  buttonText: string;
  iconSide?: 'left' | 'right' | null;
  textStyles: StyleProp<TextStyle>;
};

const CustomButton: React.FC<CustomButtonPropsType> = ({
  touchableComponentProps,
  iconName = '',
  iconSize,
  iconColor,
  iconSide = null,
  buttonText,
  textStyles,
}) => {
  const icon = <Ionicons name={iconName} size={iconSize} color={iconColor} />;

  return (
    <TouchableComponent {...touchableComponentProps}>
      {iconSide === 'left' && icon}

      <Text style={textStyles}>
        {buttonText}
      </Text>

      {iconSide === 'right' && icon}
    </TouchableComponent>
  );
};

export default CustomButton;
