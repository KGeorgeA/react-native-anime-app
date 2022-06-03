import { StyleSheet } from 'react-native';

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
    backgroundColor: '#109CEB',
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
    color: 'white',
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
