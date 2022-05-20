import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';

import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Anime from './src/screens/Anime';

import { store } from './src/store/store';
import { RootStackParamsList } from './src/utils/types';
import Modal from './src/screens/Modal/Modal';

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const App: React.FC = () => {
  const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus>();

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
  }, []);

  if (cameraPermission === null) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack.Navigator initialRouteName="Login">
          <RootStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="Main"
            component={Main}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="Anime"
            component={Anime}
            options={{ headerShown: false }}
          />

          <RootStack.Screen
            name="Modal"
            component={Modal}
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

// const routes = {
//   rooStack: {
//     authStack: {
//       signIn: 123,
//       signUp: 123,
//     },
//     mainStack: {
//       list: '',
//       item: '',
//       camera: '',
//     },
//   },
// };

export default App;
