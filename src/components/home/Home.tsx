import React from 'react';
import { View, Text } from 'react-native';
import { StyledButton } from './../../styles/buttons';

const Home = () => {
  return (
    <View>
      <Text>Where would you like to start?</Text>
      <StyledButton text='Go To Quiz' />
    </View>
  );
};

export default Home;
