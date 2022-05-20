import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comments = () => {
  return (
    <View style={style.container}>
      <Text>Imagine comment section here</Text>
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

export default Comments;
