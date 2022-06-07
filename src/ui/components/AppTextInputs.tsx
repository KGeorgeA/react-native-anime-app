import React from 'react';
import { View, TextInput } from 'react-native';
import type { StyleProp, ViewStyle, TextInputProps } from 'react-native';

type AppTextInputsPropsType = {
  textInputPropsArray: TextInputProps[];
  inputsContainerStyles?: StyleProp<ViewStyle>;
}

const AppTextInputs: React.FC<AppTextInputsPropsType> = ({
  inputsContainerStyles,
  textInputPropsArray,
}) => {
  if (!textInputPropsArray.length) {
    return null;
  }

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

export default AppTextInputs;
