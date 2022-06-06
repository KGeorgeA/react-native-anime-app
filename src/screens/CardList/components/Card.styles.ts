import { StyleSheet } from 'react-native';

import CONSTANTS from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    paddingTop: 8,
    marginHorizontal: 8,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 2,
    backgroundColor: CONSTANTS.COLORS.PRIMARY.LIGHT,
  },
  infoContainer: {
    flex: 3,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  image: {
    resizeMode: 'contain',
    height: 150,
  },
  titleContainer: {},
  titleText: {
    fontSize: CONSTANTS.FONT_SIZES.H3,
  },
  studioContainer: {},
  studioText: {
    color: CONSTANTS.COLORS.ACCENT,
    fontSize: CONSTANTS.FONT_SIZES.H5,
  },
  labelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  labelContainer: {
    width: '45%',
    paddingRight: 2,
    backgroundColor: CONSTANTS.COLORS.PRIMARY.MAIN,
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
  },
  labelText: {
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
    textAlign: 'center',
  },
  commentsContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  commentsIcon: {
    marginRight: 5,
  },
  text: {
    fontSize: CONSTANTS.FONT_SIZES.H5,
  },
});
