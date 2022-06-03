import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  aboveThumbContainer: {
    display: 'none',
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    backgroundColor: 'white',
    transform: [{ translateX: -10 }],  // the solution is awfull PS without that AboveThumbComponent will be on the top right of thumb but not in da center
  },
  aboveThumbText: {
    textAlign: 'center',
    color: 'black',
  },
});
