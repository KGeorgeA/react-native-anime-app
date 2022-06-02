import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import DropDownPicker from 'react-native-dropdown-picker';
import type { ValueType } from 'react-native-dropdown-picker';

import styles from './SlidingDrawer.styles';
import TextInputs from '../../../ui/components/TextInputs';
import CustomButton from '../../../ui/components/CustomButton';
import CustomSlider from '../../../ui/components/CustomSlider';
import CustomAboveThumbComponent from './AboveThumbComponent';

import { useAppDispatch, useAppSelector } from '../../../utils/hooks';
import * as Reducers from '../../../store/reducer';

/// /////////////   //////////////////// ///
///  FIND DRAWER LIB or made THIS ui kit ///
/// /////////////   //////////////////// ///

type SelectorType = {
  label: string;
  value: string | number;
}

const TYPE_SELECTOR_ITEMS = [
  { label: 'TV', value: 'tv' },
  { label: 'Movie', value: 'movie' },
  { label: 'OVA', value: 'ova' },
  { label: 'Special', value: 'special' },
  { label: 'Music', value: 'music' },
];

const RATING_SELECTOR_ITEMS = [
  { label: 'G - All Ages', value: 'g' },
  { label: 'PG - Children', value: 'pg' },
  { label: 'PG-13 - For Teens 13+', value: 'pg13' },
  { label: 'R - 17+', value: 'r17' },
  { label: 'R+ - Mild Nudity', value: 'r' },
  { label: 'Rx - ***tai', value: 'rx' },
];

const width = Dimensions.get('window').width;

//  TIPIZACIA ETOGO *** BUDET OOOOCHEN DOLGOI

const SlidingDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    genres,
    isFilterDrawerShown,
    animeSearchString,
    animeGenresFilter,
    animeTypesFilter,
    animerRatingFilter,
    animeMinScoreFilter,
    animeMaxScoreFilter,
  } = useAppSelector(({ posts }) => posts);

  const [currentPicker, setCurrentPicker] = useState<'genres' | 'types' | 'rating' | null>(null);

  const [searchString, setSearchString] = useState(animeSearchString);

  const genreItems = useMemo(() => genres.map((genre) => ({
    label: genre.name,
    value: genre.mal_id,
  })), [genres]);

  const [isGenresSelectorOpen, setIsGenresSelectorOpen] = useState(false);
  const [
    genresSelectorValue,
    setGenresSelectorValue,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore -- -- -- TO-DO: remove when 'multiple' prop will work add 'ValueType[]'
  ] = useState<ValueType | null>(animeGenresFilter);
  const [genresSelectorItems, setGenresSelectorItems] = useState<SelectorType[]>([]);

  const [isTypesSelectorOpen, setIsTypesSelectorOpen] = useState(false);
  const [
    typesSelectorValue,
    setTypesSelectorValue,
  ] = useState<ValueType | null>(animeTypesFilter);
  const [typesSelectorItems, setTypesSelectorItems] = useState<SelectorType[]>(TYPE_SELECTOR_ITEMS);

  const [isRatingSelectorOpen, setIsRatingSelectorOpen] = useState(false);
  const [
    ratingSelectorValue,
    setRatingSelectorValue,
  ] = useState<ValueType | null>(animerRatingFilter);
  const [
    ratingSelectorItems,
    setRatingSelectorItems,
  ] = useState<SelectorType[]>(RATING_SELECTOR_ITEMS);

  const [
    scoreSelectorValue,
    setScoreSelectorValue,
  ] = useState<number[]>([animeMinScoreFilter || 0, animeMaxScoreFilter || 10]);

  const animatedFilterDrawerStyles = useAnimatedStyle(() => ({
    transform: [{translateX: isFilterDrawerShown
      ? withTiming(0, { duration: 250 })
      : withTiming(width, { duration: 250 }),
    }],
    backgroundColor: isFilterDrawerShown
      ? withTiming('rgba(0, 0, 0, 0.8)', { duration: 1250 })
      : withTiming('transparent'),
  }));

  const handleDropDownPickerClose = () => setCurrentPicker(null);

  const handleResetFilters = () => {
    setSearchString('');
    dispatch(Reducers.updateSearchString(''));
    setGenresSelectorValue(null);
    dispatch(Reducers.updateAnimeGenresFilter(undefined));
    setTypesSelectorValue(null);
    dispatch(Reducers.updateAnimeTypesFilter(undefined));
    setRatingSelectorValue(null);
    dispatch(Reducers.updateAnimerRatingFilter(undefined));
    setScoreSelectorValue([0, 10]);
    dispatch(Reducers.updateAnimeMinScoreFilter(0));
    dispatch(Reducers.updateAnimeMaxScoreFilter(10));
  };

  const handleApplyFilters = () => {
    dispatch(Reducers.updateSearchString(searchString));
    dispatch(Reducers.updateAnimeGenresFilter(genresSelectorValue));
    dispatch(Reducers.updateAnimeTypesFilter(typesSelectorValue));
    dispatch(Reducers.updateAnimeMinScoreFilter(scoreSelectorValue[0]));
    dispatch(Reducers.updateAnimeMaxScoreFilter(scoreSelectorValue[1]));
    dispatch(Reducers.updateAnimerRatingFilter(ratingSelectorValue));
    dispatch(Reducers.toggleFilterDrawerView());
  };

  useEffect(() => {
    setGenresSelectorItems(genreItems);
  }, [genreItems]);

  if (!genresSelectorItems.length) {
    return null;
  }

  return (
    <Animated.View style={[styles.fullFillContainer, animatedFilterDrawerStyles]}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Avaible Filters</Text>

        <TextInputs
          textInputPropsArray={[{
            style: {
              backgroundColor: '#fff',
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#000',
              padding: 5,
              marginVertical: 5,
            },
            multiline: true,
            placeholder: 'Search',
            keyboardAppearance: 'default',
            maxLength: 50,
            value: searchString,
            onChangeText: setSearchString,
          }]}
        />

        <DropDownPicker
          // placeholderStyle={{}}
          // searchTextInputStyle={{}}
          // listParentContainerStyle={{}}
          // selectedItemContainerStyle={{backgroundColor: 'blue', height: 100}}
          // selectedItemLabelStyle={{backgroundColor: 'red'}}
          containerStyle={{backgroundColor: 'red'}}

          onOpen={() => setCurrentPicker('genres')}
          onClose={() => setCurrentPicker(null)}
          closeOnBackPressed
          closeAfterSelecting
          style={styles.dropdownSelector}
          open={currentPicker === 'genres' && isGenresSelectorOpen}
          value={genresSelectorValue}
          items={genresSelectorItems}
          setItems={setGenresSelectorItems}
          searchable
          // multiple  //  does not work
          setOpen={setIsGenresSelectorOpen}  // garbage thing
          setValue={setGenresSelectorValue}
          placeholder="Genres"
          zIndex={500}
          zIndexInverse={500}
        />

        <DropDownPicker
          // placeholderStyle={{}}
          // searchTextInputStyle={{}}
          // listParentContainerStyle={{}}
          // selectedItemContainerStyle={{backgroundColor: 'blue', height: 100}}
          // selectedItemLabelStyle={{backgroundColor: 'red'}}
          containerStyle={{backgroundColor: 'red'}}

          onOpen={() => setCurrentPicker('types')}
          onClose={() => setCurrentPicker(null)}
          closeOnBackPressed
          closeAfterSelecting
          style={styles.dropdownSelector}
          open={currentPicker === 'types' && isTypesSelectorOpen}
          value={typesSelectorValue}
          items={typesSelectorItems}
          setItems={setTypesSelectorItems}
          //  searchable
          //  multiple // does not work
          setOpen={setIsTypesSelectorOpen}  // garbage thing
          setValue={setTypesSelectorValue}
          placeholder="Types"
          zIndex={400}
          zIndexInverse={400}
        />

        <DropDownPicker
          // placeholderStyle={{}
          // searchTextInputStyle={{}}
          // listParentContainerStyle={{}}
          // selectedItemContainerStyle={{backgroundColor: 'blue', height: 100}}
          // selectedItemLabelStyle={{backgroundColor: 'red'}}
          containerStyle={{backgroundColor: 'red'}}

          onOpen={() => setCurrentPicker('rating')}
          onClose={handleDropDownPickerClose}
          closeOnBackPressed
          closeAfterSelecting
          style={styles.dropdownSelector}
          open={currentPicker === 'rating' && isRatingSelectorOpen}
          value={ratingSelectorValue}
          items={ratingSelectorItems}
          setItems={setRatingSelectorItems}
          //  searchable
          //  multiple // does not work
          setOpen={setIsRatingSelectorOpen}  // garbage thing
          setValue={setRatingSelectorValue}
          placeholder="Rating"
          zIndex={300}
          zIndexInverse={300}
        />

        <CustomSlider
          initialValue={scoreSelectorValue}
          minSliderValue={0}
          maxSliderValue={10}
          //  onSlidingComplete={setScoreSelectorValue}
          onValueChange={(value) => setScoreSelectorValue(value as number[])}  //  BRUH
          viewStyles={styles.sliderContainer}
          textStyle={styles.sliderText}
          sliderText="Minimal Anime score"
          AboveThumbComponent={CustomAboveThumbComponent}
        />

        <CustomButton
          touchableComponentProps={{
            viewProps: {
              style: [styles.applyFiltersButtonContainer, { marginBottom: 10 }],
            },
            touchableOpacityProps: {
              onPress: handleResetFilters,
            },
          }}
          textStyles={styles.applyFiltersButtonText}
          buttonText="Reset Filters"
        />

        <CustomButton
          touchableComponentProps={{
            viewProps: {
              style: styles.applyFiltersButtonContainer,
            },
            touchableOpacityProps: {
              onPress: handleApplyFilters,
            },
          }}
          textStyles={styles.applyFiltersButtonText}
          buttonText="Apply filters"
        />
      </View>
    </Animated.View>
  );
};

export default SlidingDrawer;
