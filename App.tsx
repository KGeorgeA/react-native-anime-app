/* eslint-disable max-len */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

import Login from './src/screens/Login';
import Main from './src/navigation/Main';

import { store } from './src/store/store';
import { RootStackParamsList } from './src/utils/types';

LogBox.ignoreLogs([
	"ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
	'NativeBase: The contrast ratio of',
]);

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Auth">
          <RootStack.Screen
            name="Auth"
            component={Login}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
