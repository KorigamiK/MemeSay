import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '.';
import cowsay from 'cowsay2';
import cows from 'cowsay2/cows';

const Home = ({}: ScreenProps<'Home'>) => {
  const x = cowsay.say('Hello', { cow: cows.eyes });

  return (
    <View>
      <Text style={styles.text}>Hi HI</Text>
      <Text style={styles.text}>{x}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { color: 'black' },
});
export default Home;
