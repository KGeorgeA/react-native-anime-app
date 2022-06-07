import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

import Modal from 'react-native-modal';
import styles, { IMAGE_COUNT } from './Galery.styles';
import AppTouchableComponent from '../../../ui/components/AppTouchableComponent';

type GaleryType = {
  flatListData: CameraRoll.PhotoIdentifier[];
}

const Galery: React.FC<GaleryType> = ({ flatListData }) => {
  const [modalProps, setModalProps] = useState<string | null>('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = useRef((imageUri: string | null) => {
    setModalProps(imageUri);
    setIsModalOpen(!!imageUri);
  });

  const renderItem = ({ item }: {item: CameraRoll.PhotoIdentifier}) => {
    const toggleModalRef = () => toggleModal.current(item.node.image.uri);

    return (
      <AppTouchableComponent
        touchableOpacityProps={{
          onPress: toggleModalRef,
        }}
        viewProps={{ style: styles.flatListItem }}
      >
        <Image source={{uri: item.node.image.uri}} style={styles.flatListItemImage}/>
      </AppTouchableComponent>
    );
  };

  // TO-DO: change "No image" to normal component
  return (
    <View style={styles.galeryContainer}>
      <Modal
        isVisible={isModalOpen}
        animationIn="slideInUp"
        swipeDirection={['down', 'up']}
        onBackdropPress={() => {
          toggleModal.current(null);
        }}
        onSwipeComplete={() => {
            toggleModal.current(null);
        }}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.modalCenteredContainer}>
            <View style={styles.modalView}>
              {modalProps
                ? <Image source={{uri: modalProps}} style={styles.modalImage}/>
                : <Text>No image</Text>
              }
            </View>
          </View>
        </SafeAreaView>
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
