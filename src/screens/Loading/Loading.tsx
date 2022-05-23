import { View, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={styles.emptyList}>
      <ActivityIndicator size="large" color="#109CEB" />
    </View>
  );
};
const styles = StyleSheet.create({
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loading;
