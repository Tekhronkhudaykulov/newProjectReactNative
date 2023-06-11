import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

interface ButtonType {
  name?: any;
  title: string;
  buttonTitle: string;
}
const Button = ({name, title, buttonTitle}: ButtonType) => {
  return (
    <View style={style.wrapper}>
      <View style={style.textBox}>
        <View style={style.box}>
          <Text style={style.text}>H</Text>
        </View>
        <Text style={style.text2}>Historical</Text>
      </View>
      <TouchableOpacity>
        <Text style={style.text3}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
