import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const InputFields: React.FC<{
  setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsButtonDisabled }) => {
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useFocusEffect(
    useCallback(() => {
      return () => {
        setUserName('');
        setPassword('');
      };
    }, []),
  );

  useEffect(() => {
    if (userName && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [userName, password, setIsButtonDisabled]);

  const handleUserNameChange = (text: string) => {
    setUserName(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder="USERNAME"
          autoCorrect={false}
          value={userName}
          onChangeText={handleUserNameChange}
        />

        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry
          autoCorrect={false}
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>

      <TouchableOpacity
        onPress={() =>
          Alert.alert(
            'Forgot your password?',
            'Totoro do not remember your password(',
          )
        }>
        <Text style={styles.text}>forgot password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  inputsContainer: {
    // marginVertical: 10,
    width: 250,
  },
  input: {
    height: 40,
    borderBottomColor: '#109CEB',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  text: {
    marginVertical: 5,
    fontSize: 12,
    alignSelf: 'flex-end',
    textTransform: 'uppercase',
  },
});

export default InputFields;
