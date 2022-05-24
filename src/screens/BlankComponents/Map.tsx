import React from 'react';
import { View, Text } from 'react-native';

import styles from './BlankComponent.styles';

const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Imagine a map of the nearest cinemas here</Text>
    </View>
  );
};

export default Map;
