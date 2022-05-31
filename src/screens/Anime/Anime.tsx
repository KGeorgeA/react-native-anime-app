import React, { useCallback } from 'react';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import styles from './Anime.styles';
import Loader from '../Loader/Loader';
import CustomCarousel from './components/Carousel';
import CustomButton from './components/CustomButton';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import thunks from '../../store/thunks';
import { updateCurrentAnime } from '../../store/reducer';
import type { ListStackParamsList } from '../../utils/types';

const Anime: React.FC<{ route: RouteProp<ListStackParamsList, 'Anime'> }> = (props) => {
  const animeId = props.route.params.animeId;

  const dispatch = useAppDispatch();
  const currentAnime = useAppSelector(({ posts }) => posts.currentAnime);

  useFocusEffect(
    useCallback(() => {
      dispatch(thunks.getAnime(animeId));
      return () => dispatch(updateCurrentAnime(null));
    }, [dispatch, animeId]),
  );

  if (!currentAnime) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.iosContainer}>
      <View style={styles.container}>
        <ScrollView>
          <CustomCarousel imageUrl={currentAnime.images.jpg.image_url} />

          <View style={styles.infoContainer}>
            <Text style={styles.titleText}>
              {currentAnime.title}
            </Text>

            <Text style={styles.directorText}>
              by {currentAnime.producers.map((producer, index) => (
                index === currentAnime.producers.length - 1
                  ? `${producer.name}`
                  : `${producer.name}, `
              ))}
            </Text>

            <View style={styles.touchableActions}>
              <CustomButton
                iconColor="#fff"
                iconName="thumbs-up"
                iconSize={18}
                buttonText="like"
              />

              <CustomButton
                iconColor="#fff"
                iconName="chatbox"
                iconSize={18}
                buttonText="comment"
              />
            </View>

            <Text style={styles.description}>
              {currentAnime.synopsis}
            </Text>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Anime;
