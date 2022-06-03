import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';

import styles from './CardList.styles';
import Card from './components/Card';
import Separator from '../../ui/components/Separator';
import Loader from '../Loader/Loader';
import SlidingDrawer from './components/SlidingDrawer';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import thunks from '../../store/thunks';
import type { GetParams, RenderedItemProps } from '../../utils/types';
import EmptyScreen from './components/EmptyScreen';

const renderItem = ({ item }: RenderedItemProps) => <Card item={item} />;

const INITIAL_PARAMS = {
  sfw: true,
  page: 1,
};

const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    films,
    refresh,
    animeSearchString,
    animeGenresFilter,
    animeTypesFilter,
    animerRatingFilter,
    animeMinScoreFilter,
    animeMaxScoreFilter,
    animeSafeForWifeFilter,
  } = useAppSelector(({ posts }) => posts);
  const page = useAppSelector(({ posts }) => posts.apiPagination.current_page);

  useEffect(() => {
    dispatch(thunks.getAnimes(INITIAL_PARAMS));
    dispatch(thunks.getAllGenres());
  }, [dispatch]);

  useEffect(() => {
    const filter: GetParams = {
      page: 1,
      q: animeSearchString,
      genres: animeGenresFilter,
      type: animeTypesFilter,
      rating: animerRatingFilter,
      min_score: animeMinScoreFilter,
      max_score: animeMaxScoreFilter,
      sfw: animeSafeForWifeFilter ? true : undefined,
    };

    dispatch(thunks.getAnimes(filter));
  }, [
    dispatch,
    animeSearchString,
    animeGenresFilter,
    animeTypesFilter,
    animerRatingFilter,
    animeMinScoreFilter,
    animeMaxScoreFilter,
    animeSafeForWifeFilter,
  ]);

  const handleEndReached = () => dispatch(thunks.getMoreAnimes(page));

  const handleRefresh = () => dispatch(thunks.getAnimes({ page: 1, limit: 25 }));

  if (!films.length && !refresh) {
    return <EmptyScreen />;
  }

  return (
    <View style={styles.container}>
      <SlidingDrawer />

      {refresh
        ? <Loader />
        : <View style={styles.flatList}>
          <FlatList
            keyExtractor={(item) => item.mal_id.toString()}
            data={films}
            removeClippedSubviews
            renderItem={renderItem}
            refreshing={refresh}
            onRefresh={handleRefresh}
            ItemSeparatorComponent={Separator}
            onEndReachedThreshold={1}
            onEndReached={handleEndReached}
            ListFooterComponent={films.length >= 25 ? <Loader /> : null}
          />
        </View>
      }
    </View>
  );
};

export default CardList;
