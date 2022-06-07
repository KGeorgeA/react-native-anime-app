import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';

import { ColorValue, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppTouchableComponent from './AppTouchableComponent';

import type { AppTouchableComponentPropsType } from './AppTouchableComponent';

type AppButtonPropsType = {
  touchableComponentProps?: AppTouchableComponentPropsType;
  iconName?: string;
  iconSize?: number;
  iconColor?: number | ColorValue;
  buttonText: string;
  iconSide?: 'left' | 'right' | null;
  textStyles: StyleProp<TextStyle>;
};

const AppButton: React.FC<AppButtonPropsType> = ({
  touchableComponentProps,
  iconName = '',
  iconSize,
  iconColor,
  iconSide = 'left',
  buttonText,
  textStyles,
}) => {
  const icon = iconName ? <Ionicons name={iconName} size={iconSize} color={iconColor} /> : null;

  return (
    <AppTouchableComponent {...touchableComponentProps}>
      {iconSide === 'left' && icon}

      <Text style={textStyles}>
        {buttonText}
      </Text>

      {iconSide === 'right' && icon}
    </AppTouchableComponent>
  );
};

export default AppButton;
