import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import TopBar from './src/component/Header/TopBar';
import GoodAfternoon from './src/component/Main/GoodAfternoon/GoodAfternoon';
import VerseOfDay from './src/component/Main/VerseOfDay/view';
import Listen from './src/component/Main/Listen/view';
import ReadingPlans from './src/component/Main/ReadingPlans/view';
import Button from './src/component/Main/Button/View';
import Learn from './src/component/Main/Learn/view';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <ScrollView>
        <TopBar />
        <GoodAfternoon />
        <VerseOfDay />
        <Listen />
        <ReadingPlans />
        <View>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </View>
        <Learn />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
