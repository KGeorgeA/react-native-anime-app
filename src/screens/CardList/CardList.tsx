import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';

import styles from './CardList.styles';
import Card from './components/Card';
import Separator from './components/Separator';
import Loader from '../Loader/Loader';

import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import thunks from '../../store/thunks';
import type { RenderedItemProps } from '../../utils/types';

const renderItem = ({ item }: RenderedItemProps) => <Card item={item} />;

const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state) => state.posts.films);
  const refresh = useAppSelector((state) => state.posts.refresh);
  const page = useAppSelector((state) => state.posts.apiPagination.current_page);

  useEffect(() => {
    dispatch(thunks.getAnimes());
  }, [dispatch]);

  const handleEndReached = () => dispatch(thunks.getMoreAnimes(page));

  const handleRefresh = () => dispatch(thunks.getAnimes({ limit: 25, page: 1 }));

  if (!films.length) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
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
