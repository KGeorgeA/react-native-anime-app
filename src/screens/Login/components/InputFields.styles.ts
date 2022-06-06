import { StyleSheet } from 'react-native';

import CONSTANTS from '../../../utils/constants';

export default StyleSheet.create({
  container: {
    height: 100,
  },
  inputsContainer: {
    width: 250,
  },
  input: {
    height: 40,
    borderBottomColor: CONSTANTS.COLORS.PRIMARY.MAIN,
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  text: {
    marginVertical: 5,
    fontSize: CONSTANTS.FONT_SIZES.H5,
    alignSelf: 'flex-end',
    textTransform: 'uppercase',
  },
});
