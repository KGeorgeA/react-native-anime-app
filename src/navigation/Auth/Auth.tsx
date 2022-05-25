import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../../screens/Login';

import type { AuthStackParamsList } from '../../utils/types';

const RootStack = createNativeStackNavigator<AuthStackParamsList>();

const Auth: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="Login">
      <RootStack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
  </RootStack.Navigator>
  );
};

export default Auth;
