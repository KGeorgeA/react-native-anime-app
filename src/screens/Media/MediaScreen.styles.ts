import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  makePictureContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  makePictureButtonWrapper: {
    borderRadius: 10,
    backgroundColor: '#109CEB',
  },
  makePictureButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 3,
    paddingHorizontal: 5,
  },
  makePictureIcon: {
    marginRight: 5,
  },
  makePictureText: {
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
