import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';

import styles from './CardList.styles';
import Card from './components/Card';
import Separator from './components/Separator';
import Loader from '../Loader/Loader';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import thunks from '../../store/thunks';
import type { RenderedItemProps } from '../../utils/types';
import SlidingDrawer from './components/SlidingDrawer';

const renderItem = ({ item }: RenderedItemProps) => <Card item={item} />;

const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(({ posts }) => posts.films);
  const refresh = useAppSelector(({ posts }) => posts.refresh);
  const page = useAppSelector(({ posts }) => posts.apiPagination.current_page);
  const {
    animeSearchString,
    animeGenresFilter,
    animeTypesFilter,
    animeMinScoreFilter,
    animeMaxScoreFilter,
    animeSortDirection,
    animeSafeForWifeFilter,
    animerRatingFilter,
    animeSortFilter,
  } = useAppSelector(({ posts }) => posts);

  useEffect(() => {
    dispatch(thunks.getAnimes());
    dispatch(thunks.getAllGenres());
  }, [dispatch]);

  useEffect(() => {
    const filter = {
      animeSearchString,
      animeGenresFilter,
      animeTypesFilter,
      animeMinScoreFilter,
      animeMaxScoreFilter,
      animeSortDirection,
      animeSafeForWifeFilter,
      animerRatingFilter,
      animeSortFilter,
    };
    console.log(filter);
    // TO-DO: add useQueryString or smthn to prepare params for search
    // dispatch(thunks.getAnimes(filter));
  }, [
    dispatch,
    animeSearchString,
    animeGenresFilter,
    animeTypesFilter,
    animeMinScoreFilter,
    animeMaxScoreFilter,
    animeSortDirection,
    animeSafeForWifeFilter,
    animerRatingFilter,
    animeSortFilter,
  ]);

  const handleEndReached = () => dispatch(thunks.getMoreAnimes(page));

  const handleRefresh = () => dispatch(thunks.getAnimes({ limit: 25, page: 1 }));

  if (!films.length) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <SlidingDrawer />

      <View style={styles.flatList}>
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
          ListFooterComponent={<Loader />}
        />
      </View>
    </View>
  );
};

export default CardList;
