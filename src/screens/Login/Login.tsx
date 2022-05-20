import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import AppLogo from './components/AppLogo';
import InputFields from './components/InputFields';
import SigninButton from './components/SigninButton';

const Login: React.FC = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  return (
    <SafeAreaView style={style.iosContainer}>
      <View style={style.container}>
        <AppLogo />
        <InputFields setIsButtonDisabled={setIsButtonDisabled} />
        <SigninButton isButtonDisabled={isButtonDisabled} />
        {/* <SigninButton isButtonDisabled={false} /> */}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  iosContainer: {
    flex: 1,
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 8,
  },
});

export default Login;
