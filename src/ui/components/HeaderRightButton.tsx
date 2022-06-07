import React from 'react';

import styles from './HeaderRightButton.styles';
import AppButton from './AppButton';

import { useAppDispatch } from '../../utils/hooks';
import { toggleFilterDrawerView } from '../../store/reducer';

const HeaderRightButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const toggleFilterDrawer = () => {
    dispatch(toggleFilterDrawerView());
  };

  return (
    <AppButton
    buttonText="Filters"
    touchableComponentProps={{
      touchableOpacityProps: {
        onPress: toggleFilterDrawer,
        style: styles.buttonTouchableOpacity,
      },
      viewProps: {
        style: styles.buttonView,
      },
    }}
    textStyles={styles.buttonText}
  />
  );
};

export default HeaderRightButton;
