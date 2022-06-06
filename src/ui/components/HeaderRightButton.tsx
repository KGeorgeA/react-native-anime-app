import React from 'react';

import styles from './HeaderRightButton.styles';
import CustomButton from '../../../ui/components/CustomButton';

import { useAppDispatch } from '../../../utils/hooks';
import { toggleFilterDrawerView } from '../../../store/reducer';

const HeaderRightButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const toggleFilterDrawer = () => {
    dispatch(toggleFilterDrawerView());
  };

  return (
    <CustomButton
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
