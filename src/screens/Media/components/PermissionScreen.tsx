import React, { useCallback, useState } from 'react';
import { Linking, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './PermissionScreen.styles';

import { RootStackParamsList } from '../../../utils/types';

const PermissionScreen: React.FC = (): React.ReactElement => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();
  const [
    cameraPermissionStatus,
    setCameraPermissionStatus,
  ] = useState<CameraPermissionStatus>('not-determined');

  const [
    microphonePermissionStatus,
    setMicrophonePermissionStatus,
  ] = useState<CameraPermissionStatus>('not-determined');

  const requestMicrophonePermission = useCallback(async () => {
    const permission = await Camera.requestMicrophonePermission();

    if (permission === 'denied') await Linking.openSettings();
    setMicrophonePermissionStatus(permission);
  }, []);

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission();

    if (permission === 'denied') await Linking.openSettings();
    setCameraPermissionStatus(permission);
  }, []);

  React.useEffect(() => {
    if (
      cameraPermissionStatus === 'authorized' &&
      microphonePermissionStatus === 'authorized'
    ) navigation.replace('Main', { screen: 'Media', params: { screen: 'MediaScreen' } });
  }, [cameraPermissionStatus, microphonePermissionStatus, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        To continue using this App we need you to grant App the permissions.
      </Text>

      <View  style={styles.permissionsContainer}>
        {cameraPermissionStatus !== 'authorized' && (
          <Text style={styles.permissionText}>
            This App needs <Text style={styles.bold}>Camera permission</Text>.
            <Text style={styles.hyperlink} onPress={requestCameraPermission}>
              Grant
            </Text>
          </Text>
        )}
        {microphonePermissionStatus !== 'authorized' && (
          <Text style={styles.permissionText}>
            This App needs <Text style={styles.bold}>Micro permission</Text>.
            <Text style={styles.hyperlink} onPress={requestMicrophonePermission}>
              Grant
            </Text>
          </Text>
        )}
      </View>
    </View>
  );
};

export default PermissionScreen;
