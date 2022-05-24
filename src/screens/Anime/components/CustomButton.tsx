import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CusstomButton.styles';

import { CustomButtonProps } from '../../../utils/types';

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { iconName, iconColor = '#fff', iconSize = 18, buttonText } = props;

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
