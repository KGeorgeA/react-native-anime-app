/* eslint-disable max-len */
import React, { useState } from 'react';
import { Image, Linking } from 'react-native';

import styles from './AppLogo.styles';
import TouchableComponent from '../../../ui/components/TouchableComponent';

const imageUri = {
  guts: 'https://i.pinimg.com/750x/18/e3/4e/18e34e354c421ffb316f25d96d7673f8.jpg',
  griffith: 'https://w0.peakpx.com/wallpaper/963/790/HD-wallpaper-femto-berserk-casca-griffith-guts-manga.jpg',
};

const AppLogo: React.FC = () => {
  const [logoImageUri, setLogoImageUri] = useState<string>(imageUri.guts);

  const handleLongPress = () => Linking.openURL('https://myanimelist.net/');

  const handlePress = () => setLogoImageUri((prev) => prev === imageUri.guts ? imageUri.griffith : imageUri.guts);

  return (
    <TouchableComponent
      touchableOpacityProps={{
        activeOpacity: 1,
        onLongPress: handleLongPress,
        onPress: handlePress,
      }}
      viewProps={{
        style: styles.logoContainer,
      }}
    >
      <Image
        style={styles.image}
        source={{ uri: logoImageUri }}
      />
    </TouchableComponent>
  );
};

export default AppLogo;
