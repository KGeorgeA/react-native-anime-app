/* eslint-disable no-console */
import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './MediaScreen.styles';
import Separator from '../CardList/components/Separator';

import type { MediaStackParamsList } from '../../utils/types';
import Galery from './components/Galery';

const requestReadPermission = async (): Promise<boolean> => {
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

const MediaScreen: React.FC = () => {
  const navigation = useNavigation<
    NativeStackNavigationProp<MediaStackParamsList, 'CameraScreen'>
  >();
  const [flatListItems, setFlatListItems] = useState<CameraRoll.PhotoIdentifier[]>([]);

  const getImages = async () => {
    try {
      const hasPermission = await requestReadPermission();
      if (!hasPermission) return [];
      CameraRoll.getPhotos({ first: 12 }).then((items) => setFlatListItems(items.edges));
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(useCallback(() => {
    getImages();
    return () => setFlatListItems([]);
  }, []));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.makePictureContainer}>
            <View style={styles.makePictureButtonWrapper}>
              <TouchableOpacity
                style={styles.makePictureButton}
                onPress={() => navigation.navigate('CameraScreen')}
              >
                <Ionicons
                  name="camera"
                  size={24}
                  color="white"
                  style={styles.makePictureIcon}
                />

                <Text style={styles.makePictureText}>make a photo</Text>
              </TouchableOpacity>
            </View>
        </View>

        <Separator marginTop={0} height={2} />

        <Galery
          flatListData={flatListItems}
        />
      </View>
    </SafeAreaView>
  );
};

export default MediaScreen;
