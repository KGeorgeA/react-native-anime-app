import React from 'react';

import styles from './AboveThumbComponent.styles';
import AppTextInputs from '../../../ui/components/AppTextInputs';

const CustomAboveThumbComponent = (value: number) => {
  return (
    <AppTextInputs
      inputsContainerStyles={styles.aboveThumbContainer}
      textInputPropsArray={[
        {
          value: value.toString(),
          style: styles.aboveThumbText,
          editable: false,
        },
      ]}
    />
  );
};

export default CustomAboveThumbComponent;
