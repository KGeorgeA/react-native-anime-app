import React from 'react';
import { StyleSheet, View } from 'react-native';

const Separator: React.FC = () => {
  return (
    <View style={styles.separator}/>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginTop: 10,
    height: 1,
    backgroundColor: '#d8d8d8',
  },
});

export default Separator;
