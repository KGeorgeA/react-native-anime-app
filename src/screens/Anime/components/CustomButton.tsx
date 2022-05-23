import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
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

const styles = StyleSheet.create({
  touchableOpacity: {
    marginRight: 10,
  },
  touchableButtons: {
    flexDirection: 'row',
    backgroundColor: '#109CEB',
    borderRadius: 3,
    padding: 5,
  },
  touchableText: {
    color: '#fff',
    textTransform: 'capitalize',
    marginLeft: 5,
  },
});

export default CustomButton;
