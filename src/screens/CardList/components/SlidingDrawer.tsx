import React, { useEffect, useMemo, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';
import DropDownPicker from 'react-native-dropdown-picker';

import Slider from '@react-native-community/slider';
import styles from './SlidingDrawer.styles';

import { useAppSelector } from '../../../utils/hooks';
import TextInputs from '../../../ui/components/TextInputs';
import CustomButton from '../../../ui/components/CustomButton';
import CustomSlider from '../../../ui/components/CustomSlider';

const TYPE_SELECTOR_ITEMS = [
  { label: 'TV', value: 'tv' },
  { label: 'Movie', value: 'movie' },
  { label: 'OVA', value: 'ova' },
  { label: 'Special', value: 'special' },
  { label: 'Music', value: 'music' },
];

const width = Dimensions.get('window').width;

const SlidingDrawer = () => {
  const { genres, isFilterDrawerShown } = useAppSelector(({ posts }) => posts);
  const aasd = 0;

  const genreItems = useMemo(() => genres.map((i) => ({
    label: i.name,
    value: i.name,
  })), [genres]);

  const [isGenresSelectorOpen, setIsGenresSelectorOpen] = useState(false);
  const [genresSelectorValue, setGenresSelectorValue] = useState(null);
  const [genresSelectorItems, setGenresSelectorItems] = useState<Array<{
    label: string;
    value: string;
  }>>([]);

  const [isTypesSelectorOpen, setIsTypesSelectorOpen] = useState(false);
  const [typesSelectorValue, setTypesSelectorValue] = useState(null);
  const [typesSelectorItems, setTypesSelectorItems] = useState(TYPE_SELECTOR_ITEMS);

  const animatedFilterDrawerStyles = useAnimatedStyle(() => ({
    transform: [{translateX: isFilterDrawerShown
      ? withTiming(0, { duration: 250 })
      : withTiming(width, { duration: 250 }),
    }],
    backgroundColor: '',
  }));

  useEffect(() => {
    setGenresSelectorItems(genreItems);
  }, [genreItems]);

  useEffect(() => {
    console.log(aasd);
  }, [aasd]);

  if (!genresSelectorItems.length) {
    return null;
  }

  // TO-DO: make list scrollable while filters shown OR don't
  // make selectors scrollable (why they dont?)
  return (
    <Animated.View style={[styles.fullFillContainer, animatedFilterDrawerStyles]}>
      <View style={styles.container}>
        <View style={{ margin: 10 }}>
          <Text style={{color: '#000'}}>Filters</Text>

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
              placeholder: 'Input Anime name',
              keyboardAppearance: 'default',
              maxLength: 50,
            }]}
          />

          <DropDownPicker
            style={{ marginVertical: 5 }}
            open={isGenresSelectorOpen}
            value={genresSelectorValue}
            items={genresSelectorItems}
            setItems={setGenresSelectorItems}
            searchable
            // multiple // does not work
            setOpen={setIsGenresSelectorOpen}
            setValue={setGenresSelectorValue}
            placeholder="Genres"
            zIndex={500}
            zIndexInverse={500}
          />

          <DropDownPicker
            style={{ marginVertical: 5 }}
            open={isTypesSelectorOpen}
            value={typesSelectorValue}
            items={typesSelectorItems}
            setItems={setTypesSelectorItems}
            searchable
            setOpen={setIsTypesSelectorOpen}
            setValue={setTypesSelectorValue}
            placeholder="Anime types"
            zIndex={400}
            zIndexInverse={400}
          />

          <Slider
            minimumValue={0}
            maximumValue={10}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
            step={0.01}
            value={aasd}
          />

          <CustomSlider
            onSlidingComplete={(v) => console.log(v)}
            onSlidingStart={(v) => console.log(v)}
            sliderText="blabla"
            minSliderValue={0}
            maxSliderValue={10}
          />

          <CustomButton
            touchableComponentProps={{
              viewProps: {
                style: {
                  backgroundColor: '#084d77',
                  padding: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              },
              touchableOpacityProps: {
                style: {},
              },
            }}
            textStyles={{
              color: 'white',
            }}
            buttonText="Apply filters"
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default SlidingDrawer;
