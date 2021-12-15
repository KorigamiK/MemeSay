import React from 'react';
import { Text, View } from 'react-native';
import { ScreenProps } from '.';

const Home = ({ route, navigation }: ScreenProps<'Settings'>) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>
        {route.key} Hello hi
      </Text>
    </View>
  );
};

export default Home;
