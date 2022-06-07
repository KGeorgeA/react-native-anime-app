import React from 'react';
import { View } from 'react-native';
import AppText from '../../ui/components/AppText';

import styles from './BlankComponent.styles';

const Comments: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppText>
        123
      </AppText>
    </View>
  );
};

export default Comments;
