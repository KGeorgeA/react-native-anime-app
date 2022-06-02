import { StyleSheet } from 'react-native';

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
    color: 'white',
    fontSize: 24,
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
