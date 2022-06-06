import { StyleSheet } from 'react-native';
import CONSTANTS from '../../../utils/constants';

const DRAWER_WIDTH = 300;

export default StyleSheet.create({
  fullFillContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 5,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgb(63, 174, 243)',
    left: undefined,
    width: DRAWER_WIDTH,
    zIndex: 1000,
    padding: 10,
  },
  headerText: {
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
    fontSize: CONSTANTS.FONT_SIZES.H1,
  },
  dropdownSelector: {
    marginVertical: 5,
   },
  sliderContainer: {
    paddingVertical: 10,
  },
  checkboxTitle: {
    textAlign: 'center',
    fontSize: CONSTANTS.FONT_SIZES.H3,
  },
  sliderText: {
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
    fontSize: CONSTANTS.FONT_SIZES.H3,
  },
  applyFiltersButtonContainer: {
    backgroundColor: '#084d77',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyFiltersButtonText: {
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
  },
});
