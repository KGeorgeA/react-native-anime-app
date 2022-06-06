import { StyleSheet } from 'react-native';
import CONSTANTS from '../../utils/constants';

export default StyleSheet.create({
  buttonTouchableOpacity: {
    marginRight: 10,
  },
  buttonView: {
    backgroundColor: CONSTANTS.COLORS.PRIMARY.MAIN,
    padding: 5,
  },
  buttonText: {
    fontSize: CONSTANTS.FONT_SIZES.H3,
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
  },
});
