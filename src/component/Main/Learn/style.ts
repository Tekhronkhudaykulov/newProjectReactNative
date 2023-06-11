import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    backgroundColor: '#F0F8FF',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 20,
  },
  item: {
    width: '65%',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 24,
  },
  button: {
    marginTop: 20,
    borderRightColor: '#126ABB',
    borderWidth: 1,
    width: '55%',
    borderRadius: 4,
    paddingVertical: 5,
    paddingLeft: 10,
  },
  buttonText: {
    color: '#126ABB',
    fontSize: 16,
  },
});
