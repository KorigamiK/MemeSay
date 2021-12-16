import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ScreenProps } from '.';

const Home = ({}: ScreenProps<'Home'>) => {
  return (
    <View>
      <Text style={styles.text}>Hi HI</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { color: 'green' },
});
export default Home;
