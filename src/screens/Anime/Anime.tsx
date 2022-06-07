import React, { useCallback, useState } from 'react';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';

import { Tab } from '@rneui/themed';
import styles from './Anime.styles';
import Loader from '../Loader/Loader';
import CustomCarousel from './components/Carousel';
import AppButton from '../../ui/components/AppButton';

import CONSTANTS from '../../utils/constants';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import thunks from '../../store/thunks';
import { updateCurrentAnime } from '../../store/reducer';
import type { ListStackParamsList } from '../../utils/types';

const Anime: React.FC<{ route: RouteProp<ListStackParamsList, 'Anime'> }> = (props) => {
  const animeId = props.route.params.animeId;
  const [tabIndex, setTabIndex] = useState<number>(0);

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
            <View>
              <Text style={styles.titleText}>
                {currentAnime.title_english ?? currentAnime.title}
                <Text style={styles.japaneseTitleText}> ({currentAnime.title_japanese})</Text>
              </Text>

              <Text style={styles.studiosText}>
                by {currentAnime.studios.map((studio, index) => (
                  index === currentAnime.studios.length - 1
                    ? `${studio.name}`
                    : `${studio.name}, `
                ))}
              </Text>
            </View>

            <View style={{ justifyContent: 'space-between' }}>
              <Text style={{}}>
                Score {currentAnime.score}
              </Text>

              <Text style={{}}>
                {currentAnime.scored_by} users
              </Text>

              <Text style={{}}>
                Ranked #{currentAnime.rank}
              </Text>

              <Text style={{}}>
                Popularity #{currentAnime.popularity}
              </Text>

              <Text style={{}}>
                Producers: {currentAnime.producers.map((producer, index) => (
                  index === currentAnime.producers.length - 1
                    ? `${producer.name}`
                    : `${producer.name}, `
                ))}
              </Text>
            </View>

            <View style={styles.touchableActions}>
              <AppButton
                touchableComponentProps={{
                  touchableOpacityProps: {
                    style: styles.touchableOpacity,
                  },
                  viewProps: {
                    style: styles.touchableButtons,
                  },
                }}
                iconColor={CONSTANTS.COLORS.WHITE}
                iconName="thumbs-up"
                iconSize={CONSTANTS.FONT_SIZES.H3}
                buttonText="like"
                textStyles={styles.touchableText}
              />

              <AppButton
                touchableComponentProps={{
                  touchableOpacityProps: {
                    style: styles.touchableOpacity,
                  },
                  viewProps: {
                    style: styles.touchableButtons,
                  },
                }}
                iconColor={CONSTANTS.COLORS.WHITE}
                iconName="chatbox"
                iconSize={CONSTANTS.FONT_SIZES.H3}
                buttonText="comment"
                textStyles={styles.touchableText}
              />
            </View>

            <Tab
              containerStyle={{ height: 50, marginVertical: 8 }}
              value={tabIndex}
              onChange={(value) => setTabIndex(value)}
            >
              <Tab.Item
                titleStyle={(active) => ({
                  color: active ? CONSTANTS.COLORS.TEXT.CONTRAST : CONSTANTS.COLORS.TEXT.MAIN,
                })}
                title="Synopsis"
              />

              <Tab.Item
                titleStyle={(active) => ({
                  color: active ? CONSTANTS.COLORS.TEXT.CONTRAST : CONSTANTS.COLORS.TEXT.MAIN,
                })}
                title="Background"
              />
            </Tab>

            <View style={{paddingVertical: 8}}>
              {tabIndex === 0 &&
                <Text style={styles.description}>
                  {currentAnime.synopsis.replace(' [', '\n[')}
                </Text>
              }

              {tabIndex === 1 && currentAnime.background &&
                <Text>
                  {currentAnime.background}
                </Text>
              }
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Anime;
