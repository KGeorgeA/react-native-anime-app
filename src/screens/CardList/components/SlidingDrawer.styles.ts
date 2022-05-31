import { StyleSheet } from 'react-native';

const DRAWER_WIDTH = 300;

export default StyleSheet.create({
  fullFillContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 5,
    // alignItems: 'flex-end',
  },
  container: {
    backgroundColor: 'rgb(63, 174, 243)',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    // left: 0,
    width: DRAWER_WIDTH,
    zIndex: 1000,
  },
  dropdownSelector: {
    marginVertical: 5,
   },
  sliderContainer: {
    paddingVertical: 10,
  },
  sliderText: {
    color: 'white',
    fontSize: 18,
  },
  applyFiltersButtonContainer: {
    backgroundColor: '#084d77',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyFiltersButtonText: {
    color: 'white',
  },
});
