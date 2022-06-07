import React, { ReactNode } from 'react';
import { View, TouchableOpacity } from 'react-native';
import type {
  ViewProps,
  TouchableOpacityProps,
  // GestureResponderEvent,
  // StyleProp,
  // ViewStyle,
} from 'react-native';

export type AppTouchableComponentPropsType = {
  touchableOpacityProps?: TouchableOpacityProps;
  viewProps?: ViewProps;
  children?: ReactNode;
}

// That looks kinda bad VERY bad
// TO-DO: refactor it
const AppTouchableComponent: React.FC<AppTouchableComponentPropsType> = ({
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

// export type AppTouchableComponentPropsType2 = {
//   children?: ReactNode;
//   onPress?: (event: GestureResponderEvent) => void;
//   style?: {
//     wrapper: StyleProp<ViewStyle>;
//     container: StyleProp<ViewStyle>;
//   };
// } & ViewProps

// export const AppTouchableComponent2: React.FC<AppTouchableComponentPropsType2> = (props) => {
//   return (
//     <TouchableOpacity style={props.style?.wrapper} onPress={props.onPress}>
//       <View {...props} style={props.style?.container}>
//         {props.children}
//       </View>
//     </TouchableOpacity>
//   );
// };

export default AppTouchableComponent;
