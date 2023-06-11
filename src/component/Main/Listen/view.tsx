import {Image, Text, View} from 'react-native';
import ImageDad from '../../../assets/icon/image.png';
import style from './style';

const Listen = () => {
  return (
    <View style={style.wrapper}>
      <Image source={ImageDad} style={style.img} />
      <View style={style.item}>
        <Text style={style.text}>
          Now <Text style={style.text2}>listen</Text> and read the Bible at the
          same time.
        </Text>
      </View>
      <View style={style.item2}>
        <View style={style.item3}>
          <Text>Image</Text>
          <Text style={style.text3}>Start Listening</Text>
        </View>
        <Text style={style.text4}>Dismiss</Text>
      </View>
    </View>
  );
};

export default Listen;
