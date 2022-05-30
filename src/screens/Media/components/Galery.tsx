import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import galeryStyles, { IMAGE_COUNT } from './Galery.styles';
import TouchableComponent from '../../../ui/components/TouchableComponent';

const Galery: React.FC<{ flatListData: CameraRoll.PhotoIdentifier[] }> = ({ flatListData }) => {
  const [modalProps, setModalProps] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imagePositionY = useSharedValue(0);

  const horizontalPanGesture = Gesture.Pan()
    .onUpdate((event) => {
      imagePositionY.value = event.translationY;
    })
    .onEnd((event) => {
      imagePositionY.value = withTiming(0, { duration: 100 });

      if (event.translationY >= 200 || event.translationY <= -200) {
        setIsModalOpen(false);
        imagePositionY.value = 0;
      }
    });

  const animatedModalViewStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: imagePositionY.value }],
  }));

  const handleModalOpen = useRef((imageUri: string) => {
    setModalProps(imageUri);
    setIsModalOpen((prev) => !prev);
  });

  const renderItem = ({ item }: {item: CameraRoll.PhotoIdentifier}) => {
    const handleModalOpenRef = () => {
      handleModalOpen.current(item.node.image.uri);
    };

    return (
      <TouchableComponent
        touchableOpacityProps={{
          onPress: handleModalOpenRef,
        }}
        viewProps={{
          style: galeryStyles.flatListItem,
        }}
      >
        <Image source={{uri: item.node.image.uri}} style={galeryStyles.flatListItemImage}/>
      </TouchableComponent>
    );
  };

  return (
    <View style={galeryStyles.galeryContainer}>
      <Modal
        visible={isModalOpen}
        onRequestClose={() => {
          handleModalOpen.current('');
        }}
      >
        <GestureDetector
          gesture={horizontalPanGesture}
        >
          <SafeAreaView style={{ flex: 1 }}>
            <Animated.View
              style={[galeryStyles.modalCenteredContainer, animatedModalViewStyle]}
            >
              <View
                style={galeryStyles.modalView}
              >
                <Image source={{uri: modalProps}} style={galeryStyles.modalImage}/>
              </View>
            </Animated.View>
          </SafeAreaView>
        </GestureDetector>
      </Modal>

      <FlatList
        keyExtractor={(item, index) => `${item.node.image.filename}+${index}`}
        data={flatListData}
        renderItem={renderItem}
        horizontal={false}
        numColumns={IMAGE_COUNT}
      />
    </View>
  );
};

export default Galery;
