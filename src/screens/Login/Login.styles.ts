import { StyleSheet } from 'react-native';

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
