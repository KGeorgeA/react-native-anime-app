import React from 'react';

import styles from './AboveThumbComponent.styles';
import TextInputs from '../../../ui/components/TextInputs';

const CustomAboveThumbComponent = (value: number) => {
  return (
    <TextInputs
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
