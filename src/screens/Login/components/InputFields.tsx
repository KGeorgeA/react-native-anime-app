import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import TextInputs from '../../../ui/components/TextInputs';
import styles from './InputFields.styles';

const InputFields: React.FC<{
  setIsButtonDisabled: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsButtonDisabled }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

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
      <TextInputs
        textInputPropsArray={[{
            style: styles.input,
            placeholder: 'USERNAME',
            autoCorrect: false,
            value: userName,
            onChangeText: handleUserNameChange,
          }, {
            style: styles.input,
            placeholder: 'PASSWORD',
            secureTextEntry: true,
            autoCorrect: false,
            value: password,
            onChangeText: handlePasswordChange,
        }]}
        inputsContainerStyles={styles.inputsContainer}
      />

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
