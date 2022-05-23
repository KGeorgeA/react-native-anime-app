import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MainScreenProp } from '../../../utils/types';

const SigninButton: React.FC<{ isButtonDisabled: boolean }> = ({ isButtonDisabled }) => {
  const navigation = useNavigation<MainScreenProp>();

  const handleButtonPress = () => navigation.navigate('Main');

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

const styles = StyleSheet.create({
  container: {},
  button: {
    width: 200,
    borderRadius: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#109CEB',
  },
  buttonDisabled: {
    backgroundColor: '#d8d8d8',
  },
  text: {
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default SigninButton;
