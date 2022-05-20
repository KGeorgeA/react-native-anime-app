import { View, StyleSheet, ActivityIndicator } from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View style={style.emptyList}>
      <ActivityIndicator size="large" color="#109CEB" />
    </View>
  );
};
const style = StyleSheet.create({
  emptyList: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Loading;
