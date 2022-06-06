import { StyleSheet } from 'react-native';

import CONSTANTS from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.WHITE,
  },
  captureIconContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
  },
  flipCameraPositionIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 10,
  },
});
