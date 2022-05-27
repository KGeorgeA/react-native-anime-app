import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    // flex: 2,
    height: 300,
    width: '100%',
  },
  sliderContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    height: '100%',
  },
  paginationContainer: {
    paddingVertical: 5,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
});
