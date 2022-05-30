import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import type { StyleProp, TextStyle } from 'react-native';

import Slider from '@react-native-community/slider';
import type { SliderProps } from '@react-native-community/slider';

type CustomSliderType = {
  sliderText: string;
  textStyle?: StyleProp<TextStyle>;
  minSliderValue: number;
  maxSliderValue: number;
  onSlidingStart: (value: number) => void;
  onSlidingComplete: (value: number) => void;
  sliderProps?: SliderProps;
}

const CustomSlider: React.FC<CustomSliderType> = ({
  sliderText,
  textStyle,
  sliderProps,
  minSliderValue = 0,
  maxSliderValue = 10,
  onSlidingStart = () => null,
  onSlidingComplete = () => null,
}) => {
  const [sliderReadOnlyValue, setSliderReadOnlyValue] = useState(0);

  const handleSliderValueChange = (value: number) => {
    setSliderReadOnlyValue(value);
  };

  return (
    <View>
      <Text style={textStyle}>{sliderText}</Text>

      <Slider
        step={0.5}
        {...sliderProps}
        minimumValue={minSliderValue}
        maximumValue={maxSliderValue}
        onValueChange={handleSliderValueChange}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
      />
    </View>
  );
};

export default CustomSlider;
