import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import Loading from '../Loading/Loading';

const CameraScreen: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useFocusEffect(() => {
    setIsActive(true);
    return () => setIsActive(false);
  });

  const devices = useCameraDevices();
  const device = devices.back;

  if (!device) {
    return <Loading />;
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={isActive}
    />
  );
};

export default CameraScreen;
