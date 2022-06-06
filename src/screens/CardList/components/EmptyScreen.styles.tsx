import { StyleSheet } from 'react-native';
import CONSTANTS from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: CONSTANTS.FONT_SIZES.H1,
    textAlign: 'center',
  },
  buttonTouchableOpacity: {
    marginTop: 10,
  },
  buttonView: {
    flexDirection: 'row',
    backgroundColor: CONSTANTS.COLORS.PRIMARY.MAIN,
    borderRadius: 3,
    padding: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
    textTransform: 'capitalize',
    marginLeft: 5,
    fontSize: CONSTANTS.FONT_SIZES.H2,
  },
});
