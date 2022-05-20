import React, { memo } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { CardProps } from '../../../utils/types';

const Card: React.FC<CardProps> = ({ item, navigate }) => {
  const handleOnItemPress = () => {
    navigate();
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={handleOnItemPress}>
        <View style={style.cardContainer}>
          <View style={style.imageContainer}>
            <Image source={{ uri: item.images.jpg.image_url }} style={style.image} />
          </View>

          <View style={style.infoContainer}>
            <View>
              <View style={style.titleContainer}>
                <Text style={[style.text, style.titleText]}>{item.title}</Text>
              </View>

              <View style={style.directorContainer}>
                <Text style={[style.text, style.directorText]}>
                  by {item.producers.map((producer, index) => (
                    index === item.producers.length - 1
                      ? `${producer.name}`
                      : `${producer.name}, `
                  ))}
                </Text>
              </View>
            </View>

            <View>
              <View style={style.labelsContainer}>
                {item.genres.map((genre, index) => {
                  return (
                    <View key={`index=${index}`} style={style.labelContainer}>
                      <Text style={style.labelText}>{genre.name}</Text>
                    </View>
                  );
                })}
              </View>

              <View style={style.commentsContainer}>
                <Ionicons name="chatbubbles" size={16} color="#109CEB" style={style.commentsIcon}/>

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

const style = StyleSheet.create({
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
