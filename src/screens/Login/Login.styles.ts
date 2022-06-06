import { StyleSheet } from 'react-native';

import CONSTANTS from '../../utils/constants';

export default StyleSheet.create({
  iosContainer: {
    flex: 1,
  },
  container: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 8,
  },
  button: {
    width: 200,
    borderRadius: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEnabled: {
    backgroundColor: CONSTANTS.COLORS.PRIMARY.MAIN,
  },
  buttonDisabled: {
    backgroundColor: '#d8d8d8',
  },
  text: {
    textTransform: 'uppercase',
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
  },
});
