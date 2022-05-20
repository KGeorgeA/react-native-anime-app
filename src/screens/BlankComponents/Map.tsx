import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Map = () => {
  return (
    <View style={style.container}>
      <Text>Imagine a map of the nearest cinemas here</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
