import React from 'react';
import { View, Text, ViewStyle } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';
import type { SliderProps } from '@miblanchard/react-native-slider/lib/types';
import { Slider } from '@miblanchard/react-native-slider';

type SliderOnChangeCallback = (value: number | Array<number>) => void
type AppSliderType = {
  sliderText: string;
  textStyle?: StyleProp<TextStyle>;
  minSliderValue: number;
  maxSliderValue: number;
  onSlidingStart?: SliderOnChangeCallback;
  onSlidingComplete?: SliderOnChangeCallback;
  onValueChange?: SliderOnChangeCallback;
  sliderProps?: SliderProps;
  viewStyles?: StyleProp<ViewStyle>;
  initialValue: number[];
  AboveThumbComponent?: (inputValue: number) => React.ReactNode;
}

const AppSlider: React.FC<AppSliderType> = ({
  sliderText,
  textStyle,
  sliderProps = {},
  viewStyles,
  minSliderValue = 0,
  maxSliderValue = 10,
  onSlidingStart = () => null,
  onSlidingComplete = () => null,
  onValueChange = () => null,
  initialValue,
  AboveThumbComponent = () => null,
}) => {
  const renderAboveThumbComponent = (index: number) => AboveThumbComponent(initialValue[index]);

  return (
    <View
      style={viewStyles}
    >
      <Text style={textStyle}>{sliderText}</Text>

      <Slider
        {...sliderProps}
        animationType="spring"
        animateTransitions
        maximumTrackTintColor="#fff"
        minimumTrackTintColor="#084d77"
        minimumValue={minSliderValue}
        maximumValue={maxSliderValue}
        renderAboveThumbComponent={renderAboveThumbComponent}
        value={initialValue}
        step={0.5}
        thumbTintColor="#084d77"
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
        onValueChange={onValueChange}
      />
    </View>
  );
};

export default AppSlider;
