import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './Login.styles';
import AppLogo from './components/AppLogo';
import InputFields from './components/InputFields';

import CustomButton from '../../ui/components/CustomButton';
import type { RootStackParamsList } from '../../utils/types';

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
          touchableComponentProps={{
            touchableOpacityProps: {
              disabled: isButtonDisabled,
              onPress: handleButtonPress,
            },
            viewProps: {
              style: [
                styles.button,
                isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled,
              ],
            },
          }}
          buttonText="sign in"
          textStyles={styles.text}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
