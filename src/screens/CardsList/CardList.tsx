import React, { useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import Card from './components/Card';
import Separator from './components/Separator';
import Loading from '../Loading/Loading';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import thunks from '../../store/thunks';
import { updatePosts } from '../../store/reducer';
import { AnimeScreenProp, RenderedItemProps } from '../../utils/types';

const CardList: React.FC = () => {
  const navigation = useNavigation<AnimeScreenProp>();
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.posts.films);
  const refresh = useAppSelector((state) => state.posts.refresh);
  const page = useAppSelector((state) => state.posts.apiPagination.current_page);

  useFocusEffect(
    useCallback(() => {
      dispatch(thunks.getAnimes());
    }, [dispatch]),
  );

  const renderItem = ({ item }: RenderedItemProps) => {
    return (
      <Card
        item={item}
        navigate={() => navigation.navigate('Anime', { animeId: item.mal_id })}
      />
    );
  };

  const handleEndReached = () => dispatch(thunks.getMoreAnimes(page));

  const handleRefresh = () => dispatch(thunks.getAnimes({ limit: 25, page: 1 }));

  if (!films.length) {
    return <Loading />;
  }

  return (
    <View style={style.container}>
      <View style={style.flatList}>
        <FlatList
          keyExtractor={(item) => item.mal_id.toString()}
          data={films}
          renderItem={renderItem}
          refreshing={refresh}
          onRefresh={handleRefresh}
          ItemSeparatorComponent={Separator}
          onEndReachedThreshold={1}
          onEndReached={handleEndReached}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flatList: {
    width: '100%',
  },
});

export default CardList;
