import React from 'react';
import { View } from 'react-native';

type SeparatorProps = {
  marginTop?: string | number;
  backgroundColor?: string;
  height?: string | number;
};

const Separator: React.FC<SeparatorProps> = ({
  marginTop = 10,
  backgroundColor = '#d8d8d8',
  height = 1,
}) => {
  return (
    <View style={{ marginTop, backgroundColor, height }}/>
  );
};

export default Separator;
