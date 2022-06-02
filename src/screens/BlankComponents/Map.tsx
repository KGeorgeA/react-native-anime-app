// import React, { useState } from 'react';
import React from 'react';
// import { View, Text, Platform } from 'react-native';

import MapView from 'react-native-maps';
// import type { Region, MapTypes } from 'react-native-maps';
import type { Region } from 'react-native-maps';
import styles from './BlankComponent.styles';

const GEORGIA_BATUMI_REGION: Region = {
  latitude: 41.643414,
  longitude: 41.639900,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map: React.FC = () => {
  // const [region, setRegion] = useState<Region>(GEORGIA_BATUMI_REGION);
  // const [mapType, setMapType] = useState<MapTypes>('standard');

  return (
    <MapView
      style={styles.container}
      // mapPadding={{top: 20, right: 20, bottom: 550, left: 20}}
      initialRegion={GEORGIA_BATUMI_REGION}
      // region={region}
      // onRegionChange={(region) => setRegion(region)}
      mapType={'standard'}
      // mapType={mapType}
      showsMyLocationButton
      showsUserLocation
    />
  );
};

export default Map;
