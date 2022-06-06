import React, { memo, useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import styles from './Card.styles';

import type { Anime, AnimeScreenProp } from '../../../utils/types';

const Card: React.FC<{item: Anime}> = ({ item }) => {
  const navigation = useNavigation<AnimeScreenProp>();

  const handleOnItemPress = () => {
    navigation.navigate('Anime', { animeId: item.mal_id });
  };

  const commentsCount = useMemo(() => Math.ceil(Math.random() * 1000), []);

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
                <Text style={[styles.text, styles.titleText]}>
                  {item.title_english ?? item.title}
                </Text>
              </View>

              <View style={styles.studioContainer}>
                <Text style={[styles.text, styles.studioText]}>
                  by {item.studios.map((studio, index) => (
                    index === item.studios.length - 1
                      ? `${studio.name}`
                      : `${studio.name}, `
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
                  {commentsCount} Comments
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(Card);
