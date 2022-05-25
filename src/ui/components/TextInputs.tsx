import React, { memo } from 'react';
import { View, TextInput } from 'react-native';
import type { StyleProp, ViewStyle, TextInputProps } from 'react-native';

type TextInputsType = {
  textInputPropsArray: TextInputProps[],
  inputsContainerStyles?: StyleProp<ViewStyle>;
}

const TextInputs: React.FC<TextInputsType> = ({
  inputsContainerStyles,
  textInputPropsArray,
}) => {
  if (!textInputPropsArray.length) return null;

  return (
    <View style={inputsContainerStyles}>
      {textInputPropsArray.map((textInputProps, index) => (
        <TextInput
          key={index}
          {...textInputProps}
        />
      ))}
    </View>
  );
};

export default memo(TextInputs);
