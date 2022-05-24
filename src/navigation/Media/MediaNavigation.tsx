import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MediaScreen from '../../screens/Media/MediaScreen';
import PermissionScreen from '../../screens/Media/components/PermissionScreen';
import CameraScreen from '../../screens/Media/components/CameraScreen';

import { MediaStackParamsList } from '../../utils/types';

const RootStack = createNativeStackNavigator<MediaStackParamsList>();

const MediaNavigation: React.FC = () => {
  return (
    <RootStack.Navigator initialRouteName="PermissionScreen">
      <RootStack.Screen
        name="MediaScreen"
        component={MediaScreen}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false }}
      />

      <RootStack.Screen
        name="PermissionScreen"
        component={PermissionScreen}
        options={{ headerShown: false }}
      />
  </RootStack.Navigator>
  );
};

export default MediaNavigation;
