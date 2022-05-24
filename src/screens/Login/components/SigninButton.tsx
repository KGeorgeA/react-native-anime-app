import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './SigninButton.styles';

import { RootStackParamsList } from '../../../utils/types';

const SigninButton: React.FC<{ isButtonDisabled: boolean }> = ({ isButtonDisabled }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const handleButtonPress = () => navigation.replace('Main', { screen: 'List' });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled,
        ]}
        disabled={isButtonDisabled}
        onPress={handleButtonPress}
      >
        <Text style={styles.text}>sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninButton;
