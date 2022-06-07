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
    fontFamily: 'Joan',
    fontSize: CONSTANTS.FONT_SIZES.H1,
  },
  japaneseTitleText: {
    // fontFamily: "'Noto Sans JP', sans-serif",
    fontFamily: 'Noto Sans JP',
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
    paddingVertical: 8,
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
    fontFamily: 'Source Sans Pro',
    fontSize: CONSTANTS.FONT_SIZES.H3,
    textAlign: 'justify',
  },
});
