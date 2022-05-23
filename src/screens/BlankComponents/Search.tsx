import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Search modal coming soon</Text>
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

export default Search;
