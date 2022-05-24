import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {},
  button: {
    width: 200,
    borderRadius: 100,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#109CEB',
  },
  buttonDisabled: {
    backgroundColor: '#d8d8d8',
  },
  text: {
    textTransform: 'uppercase',
    color: 'white',
  },
});
