import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  conainer: {
    flex: 1,
    backgroundColor: '#1F1D2B',
  },
  sectionTitlesBackground: {
    backgroundColor: '#1F1D2B',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 14,
  },
  sectionTitleWhite: {
    color: '#FFFFFF',
  },
  sectionTitleOrange: {
    color: '#FF7427',
  },
  section: {
    fontSize: 28,
  },
  sectionSubTitle: {
    fontSize: 20,
    color: 'grey',
    marginTop: 10,
  },
  btnContainer: {
    borderRadius: 50,
    padding: 14,
    backgroundColor: '#FF7427',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: 'stretch',
  },
  btnGetStarted: {
    color: 'white',
    fontSize: 24,
  },
});

export default styles;
