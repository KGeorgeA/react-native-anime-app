import React from 'react';
import { Text } from 'react-native';

import CONSTANTS from '../../utils/constants';
import type { AppTextProps } from '../../utils/types';

const AppText: React.FC<AppTextProps> = (props) => {
  const {
    children,
    textStyles,
    textFont = 'commonFont',
    textSize = 'H3',
  } = props;
  const fontSize =  CONSTANTS.FONT_SIZES[textSize];
  const fontFamily = CONSTANTS.FONTS[textFont];

  return (
    <Text
      style={[{ fontFamily, fontSize }, textStyles]}
    >
      {children}
    </Text>
  );
};

export default AppText;
