/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  View,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';

import styles from './AppLogo.styles';

const AppLogo: React.FC = () => {
  const imageUri = {
    guts: 'https://i.pinimg.com/750x/18/e3/4e/18e34e354c421ffb316f25d96d7673f8.jpg',
    griffith: 'https://w0.peakpx.com/wallpaper/963/790/HD-wallpaper-femto-berserk-casca-griffith-guts-manga.jpg',
  };

  const [logoImageUri, setLogoImageUri] = useState<string>(imageUri.guts);

  return (
    <View style={styles.logoContainer}>
      <TouchableWithoutFeedback
        onLongPress={() => Linking.openURL('https://myanimelist.net/')}>
        <TouchableWithoutFeedback
          onPress={() => setLogoImageUri((prev) => prev === imageUri.guts ? imageUri.griffith : imageUri.guts)}
        >
          <Image
            style={styles.image}
            source={{ uri: logoImageUri }}
          />
        </TouchableWithoutFeedback>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AppLogo;
