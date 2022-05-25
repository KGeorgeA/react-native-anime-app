import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './Login.styles';
import AppLogo from './components/AppLogo';
import InputFields from './components/InputFields';

import type { RootStackParamsList } from '../../utils/types';
import CustomButton from '../../ui/components/TouchableComponent';

const Login: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

  const handleButtonPress = () => navigation.replace('Main', { screen: 'List' });

  return (
    <SafeAreaView style={styles.iosContainer}>
      <View style={styles.container}>
        <AppLogo />

        <InputFields setIsButtonDisabled={setIsButtonDisabled} />

        <CustomButton
          touchableOpacityProps={{
            disabled: isButtonDisabled,
            onPress: handleButtonPress,
          }}
          viewProps={{
            style: [
              styles.button,
              isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled,
            ],
          }}
        >
          <Text style={styles.text}>sign in</Text>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default Login;
