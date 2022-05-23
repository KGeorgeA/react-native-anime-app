import React from 'react';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View, StyleSheet, Text } from 'react-native';

import Loading from '../Loading/Loading';
import CustomCarousel from './components/Carousel';
import CustomButton from './components/CustomButton';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import thunks from '../../store/thunks';
import { updateCurrentAnime } from '../../store/reducer';
import { ListStackParamsList } from '../../utils/types';

// const Anime: React.FC<{
//   route: {
//     params: {
//       animeId: number;
//     };
//   };
// }> = (props) => {
//   const { animeId } = props.route.params;
const Anime: React.FC<{ route: RouteProp<ListStackParamsList, 'Anime'> }> = (props) => {
const animeId = props.route.params.animeId;

  const dispatch = useAppDispatch();
  const currentAnime = useAppSelector((posts) => posts.posts.currentAnime);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(thunks.getAnime(animeId));
      return () => dispatch(updateCurrentAnime(null));
    }, [dispatch, animeId]),
  );

  if (!currentAnime) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.iosContainer}>
      <View style={styles.container}>
        <CustomCarousel imageUrl={currentAnime.images.jpg.image_url} />

        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>{currentAnime.title}</Text>

          <Text style={styles.directorText}>by {
            currentAnime.producers.map((producer, index) => (
              index === currentAnime.producers.length - 1
                ? `${producer.name}`
                : `${producer.name}, `
            ))}
          </Text>

          <View style={styles.touchableActions}>
            <CustomButton iconColor="#fff" iconName="thumbs-up" iconSize={18} buttonText="like" />

            <CustomButton iconColor="#fff" iconName="chatbox" iconSize={18} buttonText="comment" />
          </View>

          <ScrollView>
            <Text style={styles.description}>{currentAnime.synopsis}</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iosContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 3,
    marginTop: 5,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 20,
  },
  directorText: {
    marginTop: 15,
    fontSize: 12,
    color: '#3faef3',
  },
  touchableActions: {
    flexDirection: 'row',
    padding: 15,
  },
  touchableOpacity: {
    marginRight: 10,
  },
  touchableButtons: {
    flexDirection: 'row',
    backgroundColor: '#109CEB',
    borderRadius: 3,
    padding: 5,
  },
  touchableText: {
    color: '#fff',
    textTransform: 'capitalize',
    marginLeft: 5,
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
  },
});

export default Anime;
