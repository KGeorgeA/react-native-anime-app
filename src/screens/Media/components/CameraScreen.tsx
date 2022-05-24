/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableWithoutFeedback,
  PermissionsAndroid,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import { useIsFocused } from '@react-navigation/native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './CameraScreen.styles';
import Loader from '../../Loader/Loader';

const requestSavePermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') return true;

  const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  if (permission === null) {
    return false;
  }

  let hasPermission = await PermissionsAndroid.check(permission);

  if (!hasPermission) {
    const permissionRequestResult = await PermissionsAndroid.request(permission);
    hasPermission = permissionRequestResult === 'granted';
  }

  return hasPermission;
};

const CameraScreen: React.FC = () => {
  const [cameraPosition, setCameraPosition] = useState<'front' | 'back'>('back');
  const camera = useRef<Camera>(null);

  const devices = useCameraDevices();
  const device = devices[cameraPosition];

  const isFocussed = useIsFocused();
  const isActive = isFocussed;

  const handleCameraCapture = async () => {
    try {
      const savePermission = await requestSavePermission();

      if (!savePermission) return null;

      camera.current?.takePhoto().then(async (r) => {
        await CameraRoll.save(r.path, { type: 'photo' });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCameraFlip = () => {
    setCameraPosition((prev) => prev === 'back' ? 'front' : 'back');
  };

  if (Platform.OS === 'ios') {
    return (
      <View>
        <Text>simulator have no cams</Text>
      </View>
    );
  }

  if (!isActive) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      {!!device && (
        <Camera
          ref={camera}
          photo
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={isActive}
        />
      )}

      <TouchableWithoutFeedback
        onPress={handleCameraCapture}
      >
        <View style={styles.captureIconContainer}>
          <Ionicons
            name="aperture-outline"
            size={100}
            color="white"
          />
        </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback
        onPress={handleCameraFlip}
      >
        <View style={styles.flipCameraPositionIcon}>
          <Ionicons
            name="sync"
            size={60}
            color="white"
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CameraScreen;
