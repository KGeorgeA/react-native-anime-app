import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

import styles from './Galery.styles';

const Galery: React.FC<{flatListData: CameraRoll.PhotoIdentifier[]}> = ({ flatListData }) => {
  const renderItem = ({ item }: {item: CameraRoll.PhotoIdentifier}) => {
    return (
      <View style={styles.flatListItem}>
        <Image source={{uri: item.node.image.uri}} style={styles.flatListItemImage}/>

        <Text>{item.node.image.uri}</Text>
      </View>
    );
  };

  return (
    <View style={styles.galeryContainer}>
        <Text style={styles.galeryHeader}>galery</Text>

        <FlatList
          keyExtractor={(item, index) => `${item.node.image.filename}+${index}`}
          data={flatListData}
          renderItem={renderItem}
        />
      </View>
  );
};

export default Galery;
