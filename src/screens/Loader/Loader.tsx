import { View, ActivityIndicator } from 'react-native';
import React from 'react';

import styles from './Loader.styles';

const Loader = () => {
  return (
    <View style={styles.emptyList}>
      <ActivityIndicator size="large" color="#109CEB" />
    </View>
  );
};

export default Loader;
