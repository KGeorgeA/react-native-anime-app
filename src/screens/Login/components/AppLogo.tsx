import React from 'react';
import {
  View,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './AppLogo.styles';

const AppLogo: React.FC = () => {
  const logoImageUri = 'https://i.pinimg.com/750x/18/e3/4e/18e34e354c421ffb316f25d96d7673f8.jpg';

  return (
    <View style={styles.logoContainer}>
      <TouchableWithoutFeedback
        onLongPress={() => Linking.openURL('https://myanimelist.net/')}>
        <Image
          style={styles.image}
          source={{ uri: logoImageUri }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppLogo;
