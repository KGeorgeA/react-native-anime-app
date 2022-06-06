import { StyleSheet } from 'react-native';

import CONSTANTS from '../../utils/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  takePictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takePictureButtonWrapper: {
    borderRadius: 10,
    backgroundColor: CONSTANTS.COLORS.PRIMARY.MAIN,
  },
  takePictureButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  takePictureIcon: {
    marginRight: 5,
  },
  takePictureText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
  },
  galeryContainer: {
    flex: 4,
  },
  galeryHeader: {
    textTransform: 'uppercase',
  },
  flatListItem: {
    flex: 1,
    width: 500,
    height: 500,
  },
  flatListItemImage: {
    flex: 1,
  },
});
