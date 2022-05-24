import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import styles from './InputFields.styles';

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
            'GRIFFIIIIIIIIIIIIIIIIIIIITH',
            )
        }>
        <Text style={styles.text}>forgot password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputFields;
