import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

import CheckBox from '@react-native-community/checkbox';

import CONSTANTS from '../../utils/constants';

type CustomCheckboxType = {
  checkboxContainerStyle: StyleProp<ViewStyle>;
  checkboxStyle?: StyleProp<ViewStyle>;
  checkboxTitleStyle: StyleProp<TextStyle>;
  checkboxTitle: string;
  checkboxValue?: boolean;
  onCheckboxValueChange?: (val: boolean) => void;
};

const CustomCheckbox: React.FC<CustomCheckboxType> = ({
  checkboxContainerStyle,
  checkboxStyle,
  checkboxTitleStyle,
  checkboxTitle,
  checkboxValue = true,
  onCheckboxValueChange = () => null,
}) => {
  return (
    <View
      style={[styles.checkboxContainer, checkboxContainerStyle]}
    >
      <CheckBox
        tintColors={{
          true: 'green',
          false: 'red',
        }}
        boxType="square"
        tintColor="red"
        onTintColor="green"
        onCheckColor="green"
        style={[styles.checkbox, checkboxStyle]}
        value={checkboxValue}
        onValueChange={onCheckboxValueChange}
      />

      <Text style={[styles.checkboxTitle, checkboxTitleStyle]}>{checkboxTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  checkbox: {
    height: 20,
    width: 20,
  },
  checkboxTitle: {
    marginLeft: 10,
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
  },
});

export default CustomCheckbox;
