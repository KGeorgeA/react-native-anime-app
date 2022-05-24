import React from 'react';
import { View, Text } from 'react-native';

import styles from './BlankComponent.styles';

const Notifications: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Imagine you have notifications here</Text>
    </View>
  );
};

export default Notifications;
