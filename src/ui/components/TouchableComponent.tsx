import React, { ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import type { ViewProps, TouchableOpacityProps } from 'react-native';

export type TouchableComponentPropsType = {
  touchableOpacityProps?: TouchableOpacityProps;
  viewProps?: ViewProps;
  children?: ReactNode;
}

// That looks kinda bad VERY bad
// TO-DO: refactor it
const TouchableComponent: React.FC<TouchableComponentPropsType> = ({
  touchableOpacityProps,
  viewProps,
  children,
}) => {
  return (
    <TouchableOpacity
      {...touchableOpacityProps}
    >
      <View
        {...viewProps}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default TouchableComponent;
