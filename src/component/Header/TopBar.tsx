import {Image, Text, View} from 'react-native';
import Logo from '../../assets/icon/BG Logo/Union.png';
import Bell from '../../assets/icon/bell.png';
import Search from '../../assets/icon/search.png';

import styles from './style';

const TopBar = () => {
  return (
    <View style={styles.wrapper}>
      {/* <Image source={Logo} /> */}
      <Text style={styles.text}>Logo</Text>
      <View style={styles.item}>
        <Image style={styles.img} source={Search} />
        <Image source={Bell} />
      </View>
    </View>
  );
};

export default TopBar;
