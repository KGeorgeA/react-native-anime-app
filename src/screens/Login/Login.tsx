import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import styles from './Login.styles';
import AppLogo from './components/AppLogo';
import InputFields from './components/InputFields';
import SigninButton from './components/SigninButton';

const Login: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.iosContainer}>
      <View style={styles.container}>
        <AppLogo />
        <InputFields setIsButtonDisabled={setIsButtonDisabled} />
        {/* <SigninButton isButtonDisabled={isButtonDisabled} /> */}
        <SigninButton isButtonDisabled={false} />
      </View>
    </SafeAreaView>
  );
};

export default Login;
