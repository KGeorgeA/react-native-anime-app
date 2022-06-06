import React from 'react';

import MapView from 'react-native-maps';
import type { Region } from 'react-native-maps';
import styles from './BlankComponent.styles';

const GEORGIA_BATUMI_REGION: Region = {
  latitude: 41.643414,
  longitude: 41.639900,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map: React.FC = () => {
  return (
    <MapView
      style={styles.container}
      initialRegion={GEORGIA_BATUMI_REGION}
      mapType={'standard'}
      showsMyLocationButton
      showsUserLocation
    />
  );
};

export default Map;
