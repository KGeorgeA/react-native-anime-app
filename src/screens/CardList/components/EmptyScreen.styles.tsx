import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
  },
  buttonTouchableOpacity: {
    marginTop: 10,
  },
  buttonView: {
    flexDirection: 'row',
    backgroundColor: '#109CEB',
    borderRadius: 3,
    padding: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    textTransform: 'capitalize',
    marginLeft: 5,
    fontSize: 20,
  },
});
