import React, { memo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { CardProps } from '../../../utils/types';

const Card: React.FC<CardProps> = ({ item, navigate }) => {
  const handleOnItemPress = () => {
    navigate();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnItemPress}>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.images.jpg.image_url }} style={styles.image} />
          </View>

          <View style={styles.infoContainer}>
            <View>
              <View style={styles.titleContainer}>
                <Text style={[styles.text, styles.titleText]}>{item.title}</Text>
              </View>

              <View style={styles.directorContainer}>
                <Text style={[styles.text, styles.directorText]}>
                  by {item.producers.map((producer, index) => (
                    index === item.producers.length - 1
                      ? `${producer.name}`
                      : `${producer.name}, `
                  ))}
                </Text>
              </View>
            </View>

            <View>
              <View style={styles.labelsContainer}>
                {item.genres.map((genre, index) => {
                  return (
                    <View key={`index=${index}`} style={styles.labelContainer}>
                      <Text style={styles.labelText}>{genre.name}</Text>
                    </View>
                  );
                })}
              </View>

              <View style={styles.commentsContainer}>
                <Ionicons name="chatbubbles" size={16} color="#109CEB" style={styles.commentsIcon}/>

                <Text>
                  {Math.ceil(Math.random() * 1000)} Comments
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    marginHorizontal: 8,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 2,
    backgroundColor: '#cfebfc',
  },
  infoContainer: {
    flex: 3,  // 3 / 4
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  image: {
    resizeMode: 'contain',
    height: 150,
  },
  titleContainer: {},
  titleText: {},
  directorContainer: {},
  directorText: {
    color: '#3faef3',
    fontSize: 13,
  },
  labelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  labelContainer: {
    width: '45%',
    paddingRight: 2,
    backgroundColor: '#109CEB',
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
  },
  labelText: {
    color: 'white',
    textAlign: 'center',
  },
  commentsContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  commentsIcon: {
    marginRight: 5,
  },
  text: {
    fontSize: 15,
  },
});

export default memo(Card);
