import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Linking,
  TouchableWithoutFeedback,
} from 'react-native';

const AppLogo: React.FC = () => {
  const logoImageUri = 'https://i.pinimg.com/750x/18/e3/4e/18e34e354c421ffb316f25d96d7673f8.jpg';

  return (
    <View style={style.logoContainer}>
      <TouchableWithoutFeedback
        onLongPress={() => Linking.openURL('https://myanimelist.net/')}>
        <Image
          style={style.image}
          source={{ uri: logoImageUri }}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const style = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    width: 230,
    height: 230,
    // backgroundColor: '#109CEB',
    borderRadius: 230,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 230,
    alignSelf: 'center',
  },
});

export default AppLogo;
