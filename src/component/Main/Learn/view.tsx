import {Image, Text, TouchableOpacity, View} from 'react-native';
import ImgPhone from '../../../assets/img/image 1.png';
import style from './style';

const Learn = () => {
  return (
    <View style={style.wrapper}>
      <View style={style.item}>
        <Text style={style.text}>
          View the Bible directly on your homescreen with our free widgets.
        </Text>
        <TouchableOpacity style={style.button}>
          <Text style={style.buttonText}>Learn how</Text>
        </TouchableOpacity>
      </View>
      {/* <Image source={ImgPhone} /> */}
      <Text>Image</Text>
    </View>
  );
};

export default Learn;
