import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CusstomButton.styles';

import CONSTANTS from '../../../utils/constants';
import type { CustomButtonProps } from '../../../utils/types';

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const {
    iconName,
    iconColor = CONSTANTS.COLORS.WHITE,
    iconSize = CONSTANTS.FONT_SIZES.H3,
    buttonText,
  } = props;

  return (
    <TouchableOpacity style={styles.touchableOpacity}>
      <View style={styles.touchableButtons}>
        <Ionicons name={iconName} size={iconSize} color={iconColor} />
        <Text style={styles.touchableText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
