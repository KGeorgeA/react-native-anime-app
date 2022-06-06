import { StyleSheet } from 'react-native';

import CONSTANTS from '../../../utils/constants';

export default StyleSheet.create({
  touchableOpacity: {
    marginRight: 10,
  },
  touchableButtons: {
    flexDirection: 'row',
    backgroundColor: CONSTANTS.COLORS.PRIMARY.MAIN,
    borderRadius: 3,
    padding: 5,
  },
  touchableText: {
    color: CONSTANTS.COLORS.TEXT.CONTRAST,
    textTransform: 'capitalize',
    marginLeft: 5,
  },
});
