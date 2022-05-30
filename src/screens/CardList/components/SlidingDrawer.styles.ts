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
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  container: {
    backgroundColor: 'rgb(63, 174, 243)',
    // position: 'absolute',
    // top: 0,
    // right: 0,
    // bottom: 0,
    // borderRadius: 15,
    // borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    // left: 0,
    width: DRAWER_WIDTH,
    zIndex: 1000,
  },
});
