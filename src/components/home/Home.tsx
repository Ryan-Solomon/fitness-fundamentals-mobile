import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { StyledButton } from './../../styles/buttons';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Where would you like to start?</Text>
      <StyledButton
        onPress={() => navigation.navigate('Quiz')}
        text='Go To Quiz'
      />
    </View>
  );
};

export default Home;
