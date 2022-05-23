import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comments: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Imagine comment section here</Text>
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

export default Comments;
