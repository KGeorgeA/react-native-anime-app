import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Notifications = () => {
  return (
    <View style={style.container}>
      <Text>Imagine you have notifications here</Text>
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

export default Notifications;
