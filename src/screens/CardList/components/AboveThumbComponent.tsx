import React from 'react';
import { StyleSheet } from 'react-native';
import TextInputs from '../../../ui/components/TextInputs';

const CustomAboveThumbComponent = (value: number) => {
  return (
    <TextInputs
      inputsContainerStyles={styles.aboveThumb}
      textInputPropsArray={[
        {
          value: value.toString(),
          style: {
            textAlign: 'center',
            color: 'black',
          },
          editable: false,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  aboveThumb: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: 'white',
    transform: [{ translateX: -10 }],  // the solution is awfull PS without that AboveThumbComponent will be on the top right of thumb but not in da center
  },
});

export default CustomAboveThumbComponent;
