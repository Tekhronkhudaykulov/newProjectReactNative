import {Image, Text, View} from 'react-native';
import IconLeft from '../../../assets/icon/Line item/Icon Left.png';
import Vector from '../../../assets/icon/Line item/Vector.png';
import styles from './style';

const GoodAfternoon = () => {
  return (
    <View>
      <Text style={styles.text}>Good Afternoon</Text>
      <View style={styles.box}>
        <Text style={styles.textBox}>Continue where you left off</Text>
        <View style={styles.wrapper}>
          {/* <Image source={IconLeft} /> */}
          <View style={styles.item}>
            <Text style={styles.itemText}>Image</Text>
            <Text style={styles.text2}>Genesis 1:1 (NIV)</Text>
          </View>
          {/* <Image source={Vector} /> */}
          <Text>Image</Text>
        </View>
      </View>
    </View>
  );
};

export default GoodAfternoon;
