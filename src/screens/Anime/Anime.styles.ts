import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  iosContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  infoContainer: {
    flex: 3,
    marginTop: 5,
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 20,
  },
  directorText: {
    marginTop: 15,
    fontSize: 12,
    color: '#3faef3',
  },
  touchableActions: {
    flexDirection: 'row',
    padding: 15,
  },
  touchableOpacity: {
    marginRight: 10,
  },
  touchableButtons: {
    flexDirection: 'row',
    backgroundColor: '#109CEB',
    borderRadius: 3,
    padding: 5,
  },
  touchableText: {
    color: '#fff',
    textTransform: 'capitalize',
    marginLeft: 5,
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
  },
});
