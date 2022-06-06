import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

import CONSTANTS from '../../../utils/constants';

const CONTENT_SPACING = 15;

export default StyleSheet.create({
  welcome: {
    fontSize: CONSTANTS.FONT_SIZES.H1,
    fontWeight: 'bold',
    maxWidth: '80%',
    textAlign: 'justify',
  },
  banner: {
    position: 'absolute',
    opacity: 0.4,
    bottom: 0,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: CONSTANTS.COLORS.WHITE,
    paddingLeft: initialWindowMetrics!.insets.left + CONTENT_SPACING,
    paddingRight: initialWindowMetrics!.insets.right + CONTENT_SPACING,
  },
  permissionsContainer: {
    marginTop: CONTENT_SPACING * 2,
  },
  permissionText: {
    fontSize: CONSTANTS.FONT_SIZES.H3,
  },
  hyperlink: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
});
