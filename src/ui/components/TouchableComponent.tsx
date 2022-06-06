import React, { ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import type {
  ViewProps,
  TouchableOpacityProps,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from 'react-native';

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
    <TouchableOpacity {...touchableOpacityProps}>
      <View {...viewProps}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export type TouchableComponentPropsType2 = {
  children?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  style?: {
    wrapper: StyleProp<ViewStyle>;
    container: StyleProp<ViewStyle>;
  };
} & ViewProps

export const TouchableComponent2: React.FC<TouchableComponentPropsType2> = (props) => {
  return (
    <TouchableOpacity style={props.style?.wrapper} onPress={props.onPress}>
      <View {...props} style={props.style?.container}>
        {props.children}
      </View>
    </TouchableOpacity>
  );
};

export default TouchableComponent;
