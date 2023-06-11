import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: '#F0F8FF',
    borderRadius: 8,
    marginVertical: 5,
    height: 70,
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    width: 40,
    height: 40,
    backgroundColor: '#1C8DFF',
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  text2: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3F4952',
  },
  text3: {
    fontSize: 16,
    color: '#126ABB',
    fontWeight: '500',
  },
});
