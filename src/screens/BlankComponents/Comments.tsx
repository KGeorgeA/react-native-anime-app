import React from 'react';
import { View, Text } from 'react-native';

import styles from './BlankComponent.styles';

const Comments: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Imagine comment section here</Text>
    </View>
  );
};

export default Comments;
