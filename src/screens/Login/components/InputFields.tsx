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
    <View style={style.container}>
      <View style={style.inputsContainer}>
        <TextInput
          style={style.input}
          placeholder="USERNAME"
          autoCorrect={false}
          value={userName}
          onChangeText={handleUserNameChange}
        />

        <TextInput
          style={style.input}
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
        <Text style={style.text}>forgot password</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
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
