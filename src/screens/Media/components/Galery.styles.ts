import { StyleSheet, Dimensions } from 'react-native';

export const IMAGE_COUNT = 3;
const IMAGE_MARGIN = 3;
const IMAGES_MARGIN = IMAGE_COUNT * IMAGE_MARGIN;
const IMAGE_WIDTH = (Dimensions.get('window').width / IMAGE_COUNT) - IMAGES_MARGIN;

export default StyleSheet.create({
  galeryContainer: {
    flex: 4,
    margin: IMAGE_MARGIN,
  },
  galeryHeader: {
    textTransform: 'uppercase',
  },
  flatListItem: {
    flex: 1,
    width: IMAGE_WIDTH,
    height: IMAGE_WIDTH,
    margin: IMAGE_MARGIN,
  },
  flatListItemImage: {
    flex: 1,
  },
  modalCenteredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 1,
    width: '100%',
  },
  modalImage: {
    flex: 1,
  },
});
