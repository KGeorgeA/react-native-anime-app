import React from 'react';
import { View, Text } from 'react-native';

import styles from './EmptyScreen.styles';
import AppButton from '../../../ui/components/AppButton';

import { useAppDispatch } from '../../../utils/hooks';
import * as Reducers from '../../../store/reducer';

const EmptyScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleResetFilters = () => {
    dispatch(Reducers.updateSearchString(''));
    dispatch(Reducers.updateAnimeGenresFilter(null));
    dispatch(Reducers.updateAnimeTypesFilter(null));
    dispatch(Reducers.updateAnimerRatingFilter(null));
    dispatch(Reducers.updateAnimeMinScoreFilter(null));
    dispatch(Reducers.updateAnimeMaxScoreFilter(null));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Unfortunately, according to your request, we have not found anything.
      </Text>

      <AppButton
        touchableComponentProps={{
          touchableOpacityProps: {
            onPress: handleResetFilters,
            style: styles.buttonTouchableOpacity,
          },
          viewProps: {
            style: styles.buttonView,
          },
        }}
        textStyles={styles.buttonText}
        iconSide="left"
        buttonText="Reset request"
        iconColor="white"
        iconName="trash"
        iconSize={25}
      />
    </View>
  );
};

export default EmptyScreen;
