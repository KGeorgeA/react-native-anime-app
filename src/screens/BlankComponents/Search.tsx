import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Search: React.FC = () => {
  return (
    <View style={style.container}>
      <Text>Search modal coming soon</Text>
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

export default Search;
