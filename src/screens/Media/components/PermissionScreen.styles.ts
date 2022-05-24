import { StyleSheet } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const CONTENT_SPACING = 15;

export default StyleSheet.create({
  welcome: {
    fontSize: 24,
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
    backgroundColor: 'white',
    paddingLeft: initialWindowMetrics!.insets.left + CONTENT_SPACING,
    paddingRight: initialWindowMetrics!.insets.right + CONTENT_SPACING,
  },
  permissionsContainer: {
    marginTop: CONTENT_SPACING * 2,
  },
  permissionText: {
    fontSize: 17,
  },
  hyperlink: {
    color: '#007aff',
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
});
