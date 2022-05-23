import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Imagine a map of the nearest cinemas here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
