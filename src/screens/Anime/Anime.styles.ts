import { StyleSheet } from 'react-native';
import CONSTANTS from '../../utils/constants';

export default StyleSheet.create({
  iosContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 3,
    marginTop: 5,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: CONSTANTS.FONT_SIZES.H1,
  },
  japaneseTitleText: {
    fontSize: CONSTANTS.FONT_SIZES.H5,
  },
  studiosText: {
    marginTop: 15,
    fontSize: CONSTANTS.FONT_SIZES.H3,
    color: CONSTANTS.COLORS.ACCENT,
  },
  producersText: {
    fontSize: CONSTANTS.FONT_SIZES.H3,
  },
  touchableActions: {
    flexDirection: 'row',
    padding: 15,
  },
  touchableOpacity: {
    marginRight: 10,
  },
  touchableButtons: {
    flexDirection: 'row',
    backgroundColor: CONSTANTS.COLORS.PRIMARY.MAIN,
    borderRadius: 3,
    padding: 5,
  },
  touchableText: {
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
    textTransform: 'capitalize',
    marginLeft: 5,
  },
  description: {
    fontSize: CONSTANTS.FONT_SIZES.H3,
    textAlign: 'justify',
  },
});
