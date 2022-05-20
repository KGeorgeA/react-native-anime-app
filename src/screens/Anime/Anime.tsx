import React from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Loading from '../Loading/Loading';
import CustomCarousel from './components/Carousel';
import CustomButton from './components/CustomButton';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import thunks from '../../store/thunks';
import { updateCurrentAnime } from '../../store/reducer';

const Anime: React.FC<{
  route: {
    params: {
      animeId: number;
    };
  };
}> = (props) => {
  const { animeId } = props.route.params;

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
    <SafeAreaView style={style.iosContainer}>
      <View style={style.container}>
        <CustomCarousel imageUrl={currentAnime.images.jpg.image_url} />

        <View style={style.infoContainer}>
          <Text style={style.titleText}>{currentAnime.title}</Text>

          <Text style={style.directorText}>by {
            currentAnime.producers.map((producer, index) => (
              index === currentAnime.producers.length - 1
                ? `${producer.name}`
                : `${producer.name}, `
            ))}
          </Text>

          <View style={style.touchableActions}>
            <CustomButton iconColor="#fff" iconName="thumbs-up" iconSize={18} buttonText="like" />

            <CustomButton iconColor="#fff" iconName="chatbox" iconSize={18} buttonText="comment" />
          </View>

          <ScrollView>
            <Text style={style.description}>{currentAnime.synopsis}</Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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
