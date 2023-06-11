import {Image, Text, View} from 'react-native';
import styles from './style';

const VerseOfDay = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.item}>
        <Text style={styles.text}>Verse of the Day</Text>
        <Text style={styles.text2}>Fri, May 27</Text>
      </View>
      <View>
        <View>
          <Text style={styles.text3}>
            But the Lord is faithful. He will establish you and guard you
            against the evil one. And we have confidence in the Lord about you,
            that you are doing and will do the things that we command. May the
            Lord direct your hearts to the love of God and to the steadfastness
            of Christ.
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.text4}>2 Thessalonians 3:3-5 (ESV)</Text>
          <Text>Image</Text>
        </View>
        <View style={styles.item2}>
          <View style={styles.item3}>
            <Text style={styles.text5}>Image</Text>
            <Text>Listen</Text>
          </View>
          <View style={styles.item3}>
            <Text style={styles.text5}>Image</Text>
            <Text>Share</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VerseOfDay;
