import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingTop: 8,
    marginHorizontal: 8,
  },
  cardContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 2,
    backgroundColor: '#cfebfc',
  },
  infoContainer: {
    flex: 3,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  image: {
    resizeMode: 'contain',
    height: 150,
  },
  titleContainer: {},
  titleText: {},
  directorContainer: {},
  directorText: {
    color: '#3faef3',
    fontSize: 13,
  },
  labelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  labelContainer: {
    width: '45%',
    paddingRight: 2,
    backgroundColor: '#109CEB',
    borderRadius: 4,
    marginRight: 5,
    marginBottom: 5,
  },
  labelText: {
    color: 'white',
    textAlign: 'center',
  },
  commentsContainer: {
    flexDirection: 'row',
    alignContent: 'center',
  },
  commentsIcon: {
    marginRight: 5,
  },
  text: {
    fontSize: 15,
  },
});
